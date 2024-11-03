import { world, Player, EntityTypeFamilyComponent, EntityComponent } from "@minecraft/server"

world.afterEvents.entityHitEntity.subscribe((event) => {  
  if (event.damagingEntity instanceof Player && event.damagingEntity.isSneaking) {
    let entityFamilies: EntityComponent | undefined = event.hitEntity.getComponent('minecraft:type_family')

    if (entityFamilies instanceof EntityTypeFamilyComponent && 
    (entityFamilies.hasTypeFamily('boat') || entityFamilies.hasTypeFamily('minecart'))) {
      event.hitEntity.applyDamage(Number.MAX_SAFE_INTEGER)
    }
  }
})