import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { IconButton, Subheader } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 600,
    overflowY: 'auto'
  },
  subheader: {
    color: 'rgba(0,0,0,0.54)'
  }
};

const tilesData = [
  {
    img: 'http://www.mofa.go.jp/mofaj/area/europe/image/map00.gif',
    title: 'Europe',
    titleJa: 'ヨーロッパ'
  },
  {
    img: 'http://www.mofa.go.jp/mofaj/area/asia/image/map00.gif',
    title: 'Asia',
    titleJa: 'アジア'
  },
  {
    img: 'http://www.mofa.go.jp/mofaj/area/n_america/image/map00.gif',
    title: 'North America',
    titleJa: '北米'
  },
  {
    img: 'http://www.mofa.go.jp/mofaj/area/latinamerica/image/map00.gif',
    title: 'Latin America',
    titleJa: '中南米'
  },
  {
    img: 'http://www.mofa.go.jp/region/asia-paci/image_paci/map00.gif',
    title: 'Pacific',
    titleJa: '大洋州'
  },
  {
    img: 'http://www.mofa.go.jp/mofaj/area/middleeast/image/map00.gif',
    title: 'Middle East',
    titleJa: '中東'
  },
  {
    img: 'http://www.mofa.go.jp/mofaj/area/africa/image/map00.gif',
    title: 'Africa',
    titleJa: 'アフリカ'
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>

    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader style={styles.subheader}>Select Region</Subheader>
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span><b>{tile.titleJa}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img alt={tile.title} src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;
