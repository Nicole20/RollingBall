#pragma strict

var target : Transform;
var z = -10;
var y = 1.5;

function Start ()
{

}

function Update ()
{
	transform.position = target.position + Vector3(0, y, z);
	transform.LookAt (target);
}
