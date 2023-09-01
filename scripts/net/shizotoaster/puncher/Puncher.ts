import { world, EntityQueryOptions, Player, Entity } from "@minecraft/server"

world.afterEvents.entityHitEntity.subscribe((event) => {
  if (event.damagingEntity.typeId == 'minecraft:player') {
    let entityQuery: EntityQueryOptions = {
      families: [ 'boat' ],
      type: event.hitEntity.typeId,
      closest: 1,
      location: event.hitEntity.location
    }

    let testEntity: Entity = event.damagingEntity.dimension.getEntities(entityQuery)[0]
    
    let player: Player | undefined
    world.getPlayers().forEach(plr => { if (plr.id == event.damagingEntity.id) { player = plr } })

    if (player != undefined && testEntity === event.hitEntity && player.isSneaking) { event.hitEntity.applyDamage(100000000000000000) }
  }
})

world.afterEvents.entityHitEntity.subscribe((event) => {
  if (event.damagingEntity.typeId == 'minecraft:player') {
    let entityQuery: EntityQueryOptions = { families: [ 'minecart' ] }

    let entities: Entity[] = event.damagingEntity.dimension.getEntities(entityQuery)
    let entity: Entity | undefined
    entities.forEach(ntt => { if (ntt == event.hitEntity) { entity = ntt } })

    let player: Player | undefined
    world.getPlayers().forEach(plr => { if (plr.id == event.damagingEntity.id) { player = plr } })

    if (player != undefined && entity != undefined && player.isSneaking) { event.hitEntity.applyDamage(100000000000000000) }
  }
})