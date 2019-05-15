/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
// === GameObject ===

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}
  // === CharacterStats ===

  /*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
  function CharacterStats(charAttributes) {
    this.healthPoints = charAttributes.healthPoints;
    this.takeDamage = function() {
      return `${this.name} took damage`;
    }
    GameObject.call(this, attributes);
    this.destroy = charAttributes.destroy;
    CharacterStats.prototype = Object.create(GameObject.prototype);
    CharacterStats.prototype.destroy = function() {
      return `${this.name} was removed frm the game`;
    }
  }



  // === Humanoid (Having an appearance or character resembling that of a human.) ===

 
function Humanoid(humanoidAttributes) {
  this.name = humanoidAttributes.name;
  this.team = humanoidAttributes.team;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.dimensions = humanoidAttributes.dimensions;
  this.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`
  }
  CharacterStats.call(this, charAttributes);
  this.destroy = humanoidAttributes.destroy;
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.destroy = function() {
    return `${this.name} was removed frm the game`;
  }
  CharacterStats.call(this, charAttributes);
  this.takeDamage = humanoidAttributes.takeDamage;
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.takeDamage = function() {
    return `${this.name} took damage`;
  }
}





/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy());