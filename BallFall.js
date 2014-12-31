#pragma strict

var maxFall = -10;

function Start ()
{

}

function Update ()
{
	if(transform.position.y <= -10)
	{
		Application.LoadLevel("Game1");
	}
}
