import { Scene } from "src/congif/core/scene"
import { SceneLocations } from "src/congif/enums"




class InteriorInstance extends Scene {

    private interior1Entity = new Entity()

    constructor() {
        super(SceneLocations.Interior)
        this.interior1Entity.addComponent(new GLTFShape('models/GF_interior_1.glb'))
        this.interior1Entity.setParent(this)
    }

}

export const Interior = new InteriorInstance()














