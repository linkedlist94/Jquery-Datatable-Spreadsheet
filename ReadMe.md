# CellEdit
##### A plugin for [DataTables.net](https://datatables.net) 
## Overview
This is an extension to [JQuery Datatable KeyTable](https://datatables.net/extensions/keytable/) using an updated version of [CellEdit](https://github.com/ejbeaty/CellEdit) that allows the user to - not only - move around the table like an Excel spreadsheet, but to do real-time edits within it.

When a cell is clicked, an input field will appear - if **listenToKeys** is true. When focus is lost on the input and the underlying DataTable object will be updated and the table will be redrawn. The new value is passed to a callback function, along with it's row, allowing for easy server-side data updates. 

![Example image](example.png "Example")

## Usage
### MakeCellsEditable(settings);

#### Keyboard Navigation Legend
- Left Arrow OR Shift + Tab: Move left 1 cell
- Right Arrow OR Tab: Move right 1 cell
- Up Arrow: Move up 1 cell
- Down Arrow: Move down 1 cell
- Enter/Return: Update selected cell value
- Esc: Deselect cell
- Home: (0,0) Top Left, Home/origin of table
- End: Bottom right, end of table


##### Settings
Unchanged settings may be seen [here](https://github.com/ejbeaty/CellEdit/blob/master/README.md#usage).

##### Settings { JSON Object  }
Property | Type | Default | Example | Details  
:------ | :------ | :------ | :-----| :------
**keys** _(mandatory for spreadsheet)_| bool | false | ```{"keys":"true"}``` | All options from Datatable.KeyTable available.
**confirmationButton** _(mandatory for spreadsheet)_| bool &#124; object | false | ```{"confirmCss":"button"}``` | To use  **Spreadsheet Functionality**, add another property **listenToKeys** and set it to true.

### Updates to CellEdit
- Each confirmation btn has a ```{confirmBtn}``` class.
- Each cancel btn has a ```{cancelBtn}``` class.
- KeyTable on KeyUp event raised to identify target cell to add/update input.
- KeyTable on KeyBlur event raised to stop/leave target cell and spread functionality.

### Basic Initialization
```javascript
    var table = $('#myTable').DataTable({
        keys:true //default keyTable movement on cells
    });

    function myCallbackFunction (updatedCell, updatedRow, oldValue) {
        console.log("The new value for the cell is: " + updatedCell.data());
        console.log("The values for each cell in that row are: " + updatedRow.data());
    }

    table.MakeCellsEditable({
        onUpdate: myCallbackFunction,
        confirmationButton: {
            listenToKeys: true //activates spreadsheet update functionality
        }
    });
```

### Advanced Initialization
```javascript
    var table = $('#myTable').DataTable({
        keys:{
            columns:[1] //ignore spreadsheet functionality on this tab
        }
    });

    function myCallbackFunction (updatedCell, updatedRow, oldValue) {
        console.log("The new value for the cell is: " + updatedCell.data());
        console.log("The values for each cell in that row are: " + updatedRow.data());
    }

    table.MakeCellsEditable({
        onUpdate: myCallbackFunction,
        confirmationButton: {
            confirmCss: 'btn btn-primary btn-sm',
            cancelCss: 'btn btn-secondary btn-sm',
            listenToKeys: true //activates spreadsheet update functionality
        }        
    });
```