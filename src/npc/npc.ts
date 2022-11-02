import { NPC, NPCDelay } from '@dcl/npc-scene-utils'

export const myNPC = new NPC({
  position: new Vector3(12.550, 0.000, 22.720),
  scale: new Vector3(1.000, 1.000, 1.000),
  rotation: new Quaternion().setEuler(0.000, 66.439, 0.000),
}, 'models/npc.glb',


  () => {
    //myNPC.playAnimation('Idle')
    // animation
    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(0.5, () => {
        //myNPC.playAnimation('Talking')
      })
    )
    engine.addEntity(dummyent)

  },
  {
    faceUser: true,
    reactDistance:2,
    hoverText:'Talk',
    onWalkAway: () => {
      myNPC.playAnimation('Idle', true, 2)
    }
  }
)

