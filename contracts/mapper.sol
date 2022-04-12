pragma solidity ^0.4.15;

contract mapper {
    struct demographicsData {
      uint yearOfBirth;
      bool male;
      uint state;
      uint race;
    }

    struct researcher {
      uint institution;
    }

    struct buyer {
      uint institution;
    }

    mapping(address => demographicsData) public participants;

    mapping(address => researcher) public researchers;
    mapping(address => buyer) public buyers;


     function addParticipants(address _addy, uint _yearOfBirth, bool _male, uint _state, uint _race) public{
        participants[_addy] = demographicsData(_yearOfBirth, _male, _state, _race);
    }

    function addResearcher(address _addy, uint _institution) public {
        researchers[_addy] = researcher(_institution);
    }

    function addBuyer(address _addy, uint _institution) public {
        researchers[_addy] = researcher(_institution);
    }

}
