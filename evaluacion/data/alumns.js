const alumns    =   [
    {name: 'Jorge',     surname: 'Borrego',     media: 5},
    {name: 'Andrea',    surname: 'Roa',         media: 6},
    {name: 'Unax',      surname: 'Borrego',     media: 4},
    {name: 'Thiago',    surname: 'Borrego',     media: 8}
]

function getSurnames( surname ) {
    const surnamesSelected  =   alumns.filter( element => element.surname === surname );
    return surnamesSelected;
}

module.exports =    getSurnames;