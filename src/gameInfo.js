const roleList = [
        { 
          name:"Rookie", 
          func: function(){
            this.setState({ autopoints: this.state.autopoints+3 })
          }, 
          level:1 },
        {
          name:"Outlaw",
          func:function(){
this.setState({ autopoints: this.state.autopoints+10 })            
          },
          level:2
        },
        {
          name:"Renegade",
          func:function(){
            this.setState({ autopoints: this.state.autopoints+20 })
          },
          level:3
        },
        {
          name:"Darth",
          func:function(){
            this.setState({ autopoints: this.state.autopoints+30 })
          },
          level:4
        },
        {
          name:"Rebel",
          func:function(){
this.setState({ autopoints: this.state.autopoints+50 })            
          },
          level:5
        },
        {
          name:"Captin",
          func:function(){
 this.setState({ autopoints: this.state.autopoints+70 })           
          },
          level:6
        },   
        {
          name:"Master",
          func:function(){
        this.setState({ autopoints: this.state.autopoints+80 })    
          },
          level:7
        }, 
        {
          name:"Champion",
          func:function(){
       this.setState({ autopoints: this.state.autopoints+90 })     
          },
          level:8
        },
        {
          name:"Unicorn Wrangler",
          func:function(){
          this.setState({ autopoints: this.state.autopoints+100 })  
          },
          level:9
        }, 
        {
          name:"Digital Overlord",
          func:function(){
this.setState({ autopoints: this.state.autopoints+150 })            
          },
          level:10
        },         
];

const upgradeList = [
  {
    name: "Student",
    cost: 20,
  },
  {
    name: "Instructor",
    cost: 40
  },
  {
    name: "Great Instructor",
    cost: 60
  },
  {
    name: "Forum",
    cost: 100
  }
];

const information = {
  roles: roleList,
  upgrades: upgradeList
};

export default information;