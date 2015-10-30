
import UnityEngine;
import Transform;

var isBoat = false;
var force =0.0;
var maxSpeed =0.0;
var turnForce = 0.0;
var maxTurnSpeed = 0.0;
var changingAltitudeForce = 0.0;
var maxChangingAltitudeSpeed=0.0;
var maxHeight=0.0;
var maxDepth=0.0;
var softener=0.0;
var curSpeed = 0.0;
var props : Transform[];
var inputX=0.0;
var inputY=0.0;
var inputZ=0.0;

function Start () {
    GetComponent.<Rigidbody>().maxAngularVelocity=maxTurnSpeed;
}

function Update () {
    curSpeed = Mathf.Clamp(GetComponent.<Rigidbody>().velocity.magnitude, 0, maxSpeed);
    
    var inputZ=Input.GetAxis("Vertical");
    var inputX=Input.GetAxis("Horizontal");
    var inputY=Input.GetAxis("UpAndDown");
}
function FixedUpdate(){
    curSpeed = Mathf.Clamp(GetComponent.<Rigidbody>().velocity.magnitude, 0, maxSpeed);
    //para trás ou para frente?
    var inputZ=Input.GetAxis("Vertical");
    //esquerda ou direita?
    var inputX=Input.GetAxis("Horizontal");
    //cima ou baixo?
    var inputY=Input.GetAxis("UpAndDown");
    
    if (inputZ > 0.0 )
    {
        GetComponent.<Rigidbody>().AddRelativeForce (0, 0, force);
    }
    else if (inputZ < 0.0)
    {
        GetComponent.<Rigidbody>().AddRelativeForce (0, 0, -force);
    }
    if (inputX > 0.0)
    {
        GetComponent.<Rigidbody>().AddRelativeTorque (0, turnForce, 0);
    }
    else if (inputX < 0.0)
    {
        GetComponent.<Rigidbody>().AddRelativeTorque (0, -turnForce, 0);
    }
    if (!isBoat)
    {
        if (inputY > 0.0 && GetComponent.<Rigidbody>().velocity.y < maxChangingAltitudeSpeed)
        {
            GetComponent.<Rigidbody>().AddRelativeForce (0, changingAltitudeForce, 0);
        }
        else if (inputY < 0.0 && GetComponent.<Rigidbody>().velocity.y > (0.0 - maxChangingAltitudeSpeed))
        {
            GetComponent.<Rigidbody>().AddRelativeForce (0, -changingAltitudeForce, 0);
        }
    }
    transform.position.y = Mathf.Clamp(transform.position.y, maxDepth, maxHeight);
    transform.rotation.x = Mathf.Clamp(transform.rotation.x, 0, 0);
    transform.rotation.z = Mathf.Clamp(transform.rotation.z, 0, 0);
    //soften are movment
if(inputX == 0.0)
GetComponent.<Rigidbody>().angularVelocity *= softener;
if(inputY == 0.0)
GetComponent.<Rigidbody>().velocity.y *= softener;
if(inputZ == 0.0)
{
GetComponent.<Rigidbody>().velocity.x *= softener;
GetComponent.<Rigidbody>().velocity.z *= softener;
}
   
    GetComponent.<Rigidbody>().AddForce(-Vector3.Project(GetComponent.<Rigidbody>().velocity, transform.right) * (GetComponent.<Rigidbody>().mass / 8) );
}
   
  



    
   

