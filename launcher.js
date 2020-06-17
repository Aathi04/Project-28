class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.009
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
        this.launch.bodyA = null
    }
    display(){

        if(this.launch.body){
            var pointA = this.launch.bodyA.position;
            var pointB = this.launch.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }  
         
    }
}
