pragma solidity ^0.4.0;
contract BumbCase {
    
    event NewCaseEvent(address from);
    
    struct bumbcase{ 
        uint id;
        uint recordNum;
        
        //identity
        string myPlate;
        string otherPlate;
        string condition;
        string date;
        string time;
        string place;
        string otherBehavior;
        string myBehavior;
        uint speed;
   
        // condition
        string road;
        string sign;
        
        //result
        string broken;
        string otherCond;
        
        //otherData
        string photo;
        string notes;
    }

    uint NumberOfCase = 0;
    address thisbumb ;
    mapping(address => bumbcase) bumbcases;
    function BumbCase(){
        thisbumb = msg.sender;
    }
    
    function NewCase(uint _id, string _myPlate, string _otherPlate, string _condition, string _date,string _time, string _place,string _otherBehavior,string _myBehavior,uint _speed, string _road, string _sign,string _broken,string _otherCond, string _photo,string _notes){
        NumberOfCase += 1;
        
        bumbcases[thisbumb].id = _id ; 
        bumbcases[thisbumb].recordNum = NumberOfCase ; 
       
        bumbcases[thisbumb].myPlate = _myPlate;
        bumbcases[thisbumb].otherPlate = _otherPlate;
        bumbcases[thisbumb].condition = _condition;
        bumbcases[thisbumb].date = _date;
        bumbcases[thisbumb].time = _time;
        bumbcases[thisbumb].place = _place;
        bumbcases[thisbumb].otherBehavior = _otherBehavior;
        bumbcases[thisbumb].myBehavior = _myBehavior;
        bumbcases[thisbumb].speed = _speed;
   
        bumbcases[thisbumb].road = _road;
        bumbcases[thisbumb].sign = _sign;
        
        bumbcases[thisbumb].broken = _broken;
        bumbcases[thisbumb].otherCond = _otherCond;
        
        bumbcases[thisbumb].photo = _photo;
        bumbcases[thisbumb].notes = _notes;
        
        NewCaseEvent(msg.sender);

    }
    
    function returnid() returns(uint){
        return bumbcases[msg.sender].id;
    }
    
    function returnrecordNum() returns(uint){
        return bumbcases[msg.sender].recordNum;
    }

    function returnmyPlate() returns(string){
        return bumbcases[msg.sender].myPlate;
    }

    function returnotherPlate() returns(string){
        return bumbcases[msg.sender].otherPlate;
    }
    
    function returncondition() returns(string){
        return bumbcases[msg.sender].condition;
    }
    
    function returndate() returns(string){
        return bumbcases[msg.sender].date;
    }
    
    function returntime() returns(string){
        return bumbcases[msg.sender].time;
    }
    
    function returnplace() returns(string){
        return bumbcases[msg.sender].place;
    }
    
    function returnotherBehavior() returns(string){
        return bumbcases[msg.sender].otherBehavior;
    }
    
    function returnmyBehavior() returns(string){
        return bumbcases[msg.sender].myBehavior;
    }
    
    function returnspeed() returns(uint){
        return bumbcases[msg.sender].speed;
    }
    
    function returnroad() returns(string){
        return bumbcases[msg.sender].road;
    }
    
    function returnsign() returns(string){
        return bumbcases[msg.sender].sign;
    }
    
    function returnbroken() returns(string){
        return bumbcases[msg.sender].broken;
    }
    
    function returnotherCond() returns(string){
        return bumbcases[msg.sender].otherCond;
    }
    
    function returnphoto() returns(string){
        return bumbcases[msg.sender].photo;
    }
    
    function returnnotes() returns(string){
        return bumbcases[msg.sender].notes;
    }

}
