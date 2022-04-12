pragma solidity ^0.4.4;


/*******************************************************************************************    
        Mapper Contract - holds mapping & structs for market participants
*******************************************************************************************/

contract mapper {

    /************************************** 
        Structs and Variables
    **************************************/

    //holds demographic data for each user
    struct demographicsData {
        uint race;
        uint16 location;
        bool gender; 
        uint dob;   //year of birth
    }

    //holds researcher
    struct researcher {
        uint institution;
    }

    //holds buyer
    struct buyer {
        uint institution;
    }

    //participants
    mapping(address => demographicsData) public participants;

    //researchers
    mapping (address => researcher) public researchers;

    /************************************** 
        Functions
    **************************************/

    //add participants to the participants mapping
    // function addParticipants(address _addy, uint _dob, bool _gender, uint _location, uint _race) public {
    //     participants[_addy] = demographicsData(_dob, _gender, _location, _race);
    // }

    // //add researcher to the researcher mapping
    // function addResearcher(address _addy, uint _institution) public {
    //     researchers[_addy] = researcher(_institution);
    // }

    // //add buyer to the buyer mapping
    // function addBuyer(address _addy, uint _institution) public {
    //     researchers[_addy] = researcher(_institution);
    // }

}

/*******************************************************************************************    
        Data Contract - maintains object holding medical research data
*******************************************************************************************/

contract data is mapper {


    /************************************** 
        Structs and Variables
    **************************************/

    mapping (uint => mapping(uint => dataPoint)) public coreData;

    uint dataPointIter = 1; //iterator pointer for dataPoint     

    struct dataPoint {
        uint id;
        address owner;
        address participant;
        bytes32 meta;
        uint256 price;
        uint data;
    }

    /************************************** 
        Functions
    **************************************/

    // Researcher submits data 
    function submitData(uint _id, address _address,bytes32 _meta, uint256 _price, uint _data) returns(bool success) {
        dataPoint memory newDataPoint;
		newDataPoint.id = dataPointIter;
		newDataPoint.owner = msg.sender;
		newDataPoint.participant = _address;
        newDataPoint.meta = _meta;
        newDataPoint.price = _price;
        newDataPoint.data = _data;

        coreData[_id][dataPointIter] = newDataPoint; //changes state
        dataPointIter += 1; //update pointe

        //add event
		return true;	
    }

    //return data for typeID
    function query (uint typeID) constant returns (uint[] prices_,bytes32[] meta_, uint[] id_) {
        uint length = dataPointIter;
        uint[] memory prices = new uint[](length);
        bytes32[] memory meta = new bytes32[](length);
        uint[] memory id = new uint[](length);

        for (uint i = 0; i<length; i++) {
            if(coreData[typeID][i].id > 0) {
                prices[i] = coreData[typeID][i].price;
                meta[i] = coreData[typeID][i].meta;
                id[i] = coreData[typeID][i].id;
            }
        }

        return(prices,meta,id);
    }


    /************************************** 
        Modifiers
    **************************************/

    //Confirms that only researcher is uploading data
    modifier checkResearcher(address _researcher)
    {
        require(msg.sender == _researcher);
        _;
    }

    function buy (uint typeID, uint _id, uint val) payable returns (uint id_,bytes32 meta_, uint price_, uint data_) {
        require(coreData[typeID][_id].id>0);
        coreData[typeID][_id].owner.transfer((msg.value * 9) / 10 ); //send 90% to researcher
        coreData[typeID][_id].participant.transfer((msg.value * 1) / 10 ); //send 10% to participant

        return(coreData[typeID][_id].id,coreData[typeID][_id].meta,coreData[typeID][_id].price,coreData[typeID][_id].data);
    }

}

/*******************************************************************************************    
        Marketplace Contract - Define buy functionality
*******************************************************************************************/

contract marketplace is data {


    /************************************** 
        Functions
    **************************************/

    function buy (uint typeID, uint _id, uint val) payable returns (uint id_,bytes32 meta_, uint price_, uint data_) {
        require(coreData[typeID][_id].id>0);
        coreData[typeID][_id].owner.transfer((val * 9) / 10 ); //send 90% to researcher
        coreData[typeID][_id].participant.transfer((val * 1) / 10 ); //send 10% to participant

        return(coreData[typeID][_id].id,coreData[typeID][_id].meta,coreData[typeID][_id].price,coreData[typeID][_id].data);
    }

}

