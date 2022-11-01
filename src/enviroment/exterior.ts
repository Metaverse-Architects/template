import { movePlayerTo } from "@decentraland/RestrictedActions"
import { Dash_Tweaker } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToV3"




class ExteriorInstance extends Scene {

    private exteriorEntity = new Entity()
    private portal = new ExitPlane()

    constructor() {
        super(SceneLocations.Exterior)
        this.exteriorEntity.addComponent(new GLTFShape('models/exterior.glb'))
        this.exteriorEntity.setParent(this)
        //Dash_Tweaker(this.exteriorEntity)
        this.customPosition()
        this.tweakerCaller()
        this.createPortal()
    }
    customPosition() {
        this.exteriorEntity.addComponentOrReplace(new Transform({
            position: new Vector3(28.880, 0.720, 32.270),
            scale: new Vector3(3.950, 3.603, 3.213),
            rotation: new Quaternion().setEuler(360.000, 360.000, 360.000),
        }))

    }
    createPortal() {
        this.portal.addComponentOrReplace(new Transform({
            position: new Vector3(4.880, 0.720, 53.270),
            scale: new Vector3(3.950, 3.603, 3.213),
            rotation: new Quaternion().setEuler(360.000, 360.000, 360.000),
        }))
        this.portal.setMessage("Portal")
        this.portal.onClick = () => movePlayerToVector3(new Vector3(56.79,0.88,7.59), new Vector3(56.79,0.88,7.59))
        this.portal.setParent(this)
    }
    tweakerCaller() {
        //Dash_Tweaker(this.portal)
    }

}

export const Interior = new ExteriorInstance()