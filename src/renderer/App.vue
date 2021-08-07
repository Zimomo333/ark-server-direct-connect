<template>
  <div id="app">
    <img class="family-img" src="./assets/family.jpg">
    <div class="map-list">
      <a class="map" v-for="(map, mapKey)  in mapData" :key="mapKey" :href="map.link">
        <img
          class="map-img"
          slot="cover"
          alt="Ragnarok"
          :src="map.img"
        />
        <span class="map-name">{{map.name}}</span>
      </a>
    </div>
    <img class="sponser-img" src="./assets/sponser.png">
  </div>
</template>

<script>
export default {
  name: 'ark-server-direct-connect',
  data () {
    return {
      mapData: {
        'Ragnarok': {
          name: '仙境',
          img: require('./assets/Ragnarok.jpg'),
          link: 'steam://connect/zimomo.hopto.org:27015'
        },
        'TheIsland': {
          name: '孤岛',
          img: require('./assets/TheIsland.jpg'),
          link: 'steam://connect/zimomo.hopto.org:27016'
        },
        'TheCenter': {
          name: '中心岛',
          img: require('./assets/TheCenter.jpg'),
          link: 'steam://connect/zimomo.hopto.org:27017'
        },
        'Valguero': {
          name: '瓦尔盖罗',
          img: require('./assets/Valguero.jpg'),
          link: 'steam://connect/zimomo.hopto.org:27018'
        },
        'Extinction': {
          name: '灭绝',
          img: require('./assets/Extinction.jpg'),
          link: 'steam://connect/zimomo.hopto.org:27019'
        },
        'Aberration': {
          name: '畸变',
          img: require('./assets/Aberration.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37015'
        },
        'ScorchedEarth': {
          name: '焦土',
          img: require('./assets/ScorchedEarth.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37016'
        },
        'Genesis': {
          name: '创世纪',
          img: require('./assets/Genesis.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37017'
        },
        'Gen2': {
          name: '创世纪2',
          img: require('./assets/Gen2.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37021'
        },
        'Crystal': {
          name: '水晶岛',
          img: require('./assets/Crystal.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37018'
        },
        'TheCenterPVP': {
          name: '中心岛PVP',
          img: require('./assets/TheCenter.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37019'
        },
        'TheIslandPVP': {
          name: '孤岛PVP',
          img: require('./assets/TheIsland.jpg'),
          link: 'steam://connect/zimomo.hopto.org:37020'
        }
      }
    }
  }
}
</script>

<style lang="scss">
html, body{
  margin: 0;
  user-select: none;
}
#app {
  margin: 0;
}
.family-img{
  display: block;
  margin: 0 auto;
}
.map-list {
  width: 1480px;
  margin: 0 auto;
}
.map {
  position: relative;
  display: inline-block;
  margin: 14px;
  width: 340px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 14px 6px rgba(0, 0, 0, 0.24);
    .map-img {
      transform: scale(1.05);
    }
  }
  .map-img {
    width: 340px;
    height: 200px;
    transition: transform .2s;
  }
  .map-name {
    position: absolute;
    right: 20px;
    bottom: 15px;
    color: #fff;
    font-size: 28px;
    font-weight: bolder;
  }
}
.sponser-img {
  display: block;
  margin: 0 auto;
  width: 1580px;
  height: 900px;
}
</style>
