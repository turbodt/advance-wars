const tiles = [
    {
        size: [2,2],
        terrains: {
            "Plain": '.  .',
            "River": '-~~-',
            "Bridge": '==II',
            "Road": '++++',
            "Wood": '&&&&',
            "Mountain": 'M^^M',
            "Sea": 's  s',
        },
    }
];

module.exports = function (map, opt = {}) {

    const tileSet = tiles[0];

    let s = '';
    for (let i = 0; i < map.size[0]; i++) {
        for (let y = 0; y < tileSet.size[0]; y++) {
            for (let j = 0; j < map.size[1]; j++) {
                const cell = map.cells[i * map.size[1] + j];
                for (let x = 0; x < tileSet.size[1]; x++) {
                    if ( opt['only'] && !opt['only'].has(cell)) {
                        s += ' ';
                    } else {
                        s += tileSet.terrains[cell.terrain.type][y * tileSet.size[1] + x]
                    }
                }
            }
            s += '\n';
        }
    }

    console.log(s);
    return s;
};