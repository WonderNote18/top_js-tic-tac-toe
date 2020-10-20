const gameBoard = (function() {
    'use strict';

    let _gameArray = [];
    let _gameDisplay = document.querySelector("#gameDisplay");

    function _render() {
        _gameDisplay.innerHTML= '';
        
        _gameDisplay.innerHTML = _generateInnerHTML();
    };

    function _generateInnerHTML() {
        let html = '';

        for (let i = 0; i < _gameArray.length; i++){
            html += `
            <div id="cell${i}" class="gameGridCell">
                <div class="gameGridText">${_gameArray[i]}</div>
            </div>
            `
        };

        return html;
    };

    function _initGameArray() {
        _gameArray = [];

        for (let i = 0; i < 9; i++) {
            _gameArray.push('X');
        };
    }

    function init() {
        _initGameArray(); 
        _render();
    };

    return {
        init: init
    };
})();

gameBoard.init();