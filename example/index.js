$(document).ready(function () {

    var table = $('#spreadsheetTable').DataTable({
        keys: true,
        ajax: {
            "url": "MOCK_DATA.json",
            dataSrc: ''
        },
        columns: [
            { "data": "id" },
            { "data": "first_name" },
            { "data": "last_name" },
            { "data": "email" },
            { "data": "gender" },
            { "data": "ip_address" }
        ]
    });

    table.MakeCellsEditable({
        onUpdate: updateToteTest,
        confirmationButton: {
            confirmCss: 'btn btn-primary btn-sm',
            cancelCss: 'btn btn-secondary btn-sm',
            listenToKeys: true //activates spreadsheet functionality
        }
    });
})

function updateToteTest(updatedCell, updatedRow, oldValue) {
    alert('Fake update');
}