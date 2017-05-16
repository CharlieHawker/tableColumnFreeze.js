(function() {
  var TableColumnFreeze = function(container) {
    this.init(container);
  };

  TableColumnFreeze.prototype.init = function(container) {
    var that = this;
    that.container = container;
    that.table = container.querySelector('table');
    that.columns = that.table.querySelectorAll('tbody tr:first-child th').length;
    that.cells = [];
    that.width = 0;
    that.calculate();
  };


  TableColumnFreeze.prototype.calculate = function() {
    var that = this;
    that.table.querySelectorAll('tr').forEach(function(row, rowIndex) {
      row.querySelectorAll('th:nth-child(-n + ' + that.columns + ')').forEach(function(cell) {
        var styling = that.calculateCellStyling(cell);
        that.cells.push({
          cell: cell,
          styling: styling
        });
        if (rowIndex === 0) {
          that.width = that.width + parseInt(styling.width, 10);
        }
      });
    });


    // CSS for container
    that.container.style.width = '100%';
    that.container.style.overflowX = 'scroll';
    // CSS for table
    that.table.style.marginLeft = that.width + 'px';
    // CSS for frozen cells
    that.cells.forEach(function(data) {
      for (key in data.styling) {
        data.cell.style[key] = data.styling[key];
      }
    });
  };


  TableColumnFreeze.prototype.calculateCellStyling = function(cell) {
    var that = this,
        clientRect = cell.getBoundingClientRect();

    return {
      width: clientRect.width + 'px',
      height: clientRect.height + 'px',
      left: clientRect.left + 'px',
      top: clientRect.top + 'px',
      position: 'absolute',
      zIndex: 9999,
      '-webkit-box-sizing': 'border-box',
      '-moz-box-sizing': 'border-box',
      '-o-box-sizing': 'border-box',
      '-ms-box-sizing': 'border-box',
      boxSizing: 'border-box'
    };
  };

  window.TableColumnFreeze = TableColumnFreeze;
})();