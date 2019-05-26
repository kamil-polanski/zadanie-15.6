function randomString() {
    const chars = `0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ`;
    let str = ``;
    for (let i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

function generateTemplate(name, data, basicElement) {
    const template = document.getElementById(name).innerHTML;
    const element = document.createElement(basicElement || `div`);

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}

const todoColumn = new Column(`To do`);
const doingColumn = new Column(`Doing`);
const doneColumn = new Column(`Done`);

board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

const card1 = new Card(`New task`);
const card2 = new Card(`Create kanban boards`);

todoColumn.addCard(card1);
doingColumn.addCard(card2);