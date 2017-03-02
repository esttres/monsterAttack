new Vue({
  el: '#app',
  data: {
    newGame: true,
    playerHealthBarWidth: 100,
    monsterHealthBarWidth: 100,
    playerHealth: 100,
    monsterHealth: 100,
    combinedLogs: []
  },
  computed: {
    playerHealthBarStyle: function() {
      return {
        width: this.playerHealthBarWidth +'%'
      };
    },
    monsterHealthBarStyle: function() {
      return {
        width: this.monsterHealthBarWidth +'%'
      };
    }
  },
  methods: {
    startStopGame: function() {
      this.newGame = !this.newGame;
      this.playerHealthBarWidth = 100;
      this.monsterHealthBarWidth = 100;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.combinedLogs.length = 0;
    },
    attack: function() {
      monsterAttack = this.randomActionsValue(5);
      playerAttack = this.randomActionsValue(5);
      this.monsterHealth -= playerAttack;
      this.playerHealth -= monsterAttack;
      this.playerHealthBarWidth = this.playerHealth;
      this.monsterHealthBarWidth = this.monsterHealth;
      this.combinedLogs.push({monsterMove: monsterAttack, playerMove: playerAttack});
      this.isGameOver();
    },
    specialAttack: function() {
      monsterAttack = this.randomActionsValue(5);
      playerAttack = this.randomActionsValue(15);
      this.monsterHealth -= playerAttack;
      this.playerHealth -= monsterAttack;
      this.playerHealthBarWidth = this.playerHealth;
      this.monsterHealthBarWidth = this.monsterHealth;
      this.combinedLogs.push({monsterMove: monsterAttack, playerMove: playerAttack});
      this.isGameOver();
    },
    heal: function() {
      monsterAttack = this.randomActionsValue(5);
      playerHeal = this.randomActionsValue(10);
      this.playerHealth += playerHeal;
      this.playerHealth -= monsterAttack;
      this.playerHealthBarWidth = this.playerHealth;
      this.monsterHealthBarWidth = this.monsterHealth;
      this.combinedLogs.push({monsterMove: monsterAttack, playerMove: ['Heal', playerHeal]});
      this.isGameOver();
    },
    randomActionsValue: function (maxValue) {
      return Math.floor(Math.random()*maxValue)+1;
    },
    isGameOver: function () {
      if (this.playerHealth <= 0) {
        alert('You LOST, the monster killed you!');
        this.startStopGame();
      } else if (this.monsterHealth <= 0) {
        alert('You WON, the monster is dead!');
        this.startStopGame();
      }
    }
  }
});
