const board = {
    name: `Kanban Board`,
    addColumn: function(column) {
        this.element.appendChild(column.element);

    },
    element: document.querySelector(`#board .column-container`)
};

document.querySelector(`#board .create-column`).addEventListener(`click`, function() {
    const name = prompt(`Enter a column name`);
    const column = new Column(name);
    board.addColumn(column);
});

function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
        group: 'kanban',
        sort: true
    });
}