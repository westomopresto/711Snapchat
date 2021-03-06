// -----JS CODE-----

//@input SceneObject TweenList
//@input Component.Camera PeepCamera
//@input Component.Camera PickleCamera

//@input SceneObject PeepFaceZoom_Loc
//@input SceneObject PickleFaceZoom_Loc



var ActiveCharacter = 0; // 0 Peep


    
function cameraSplit()
{
        global.tweenManager.startTween( script.TweenList, "toSplit" );
        global.tweenManager.startTween( script.TweenList, "peepCamToSplit" );
        global.tweenManager.startTween( script.TweenList, "pickleCamToSplit" );
}

    
function cameraReset()
{
    script.PeepCamera.getTransform().setLocalPosition(new vec3(0,0,0));
    script.PickleCamera.getTransform().setLocalPosition(new vec3(0,0,0));
}
    
function switchCharacter()
{
      cameraReset();  
    switch(ActiveCharacter){
        case 0:
            ActiveCharacter = 1
            global.tweenManager.startTween( script.TweenList, "toPickle" );
            break;
        case 1:
            ActiveCharacter = 0
            global.tweenManager.startTween( script.TweenList, "toPeep" );
    }
}


function onTapped(eventData)
{
    switchCharacter();
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);

cameraSplit();
