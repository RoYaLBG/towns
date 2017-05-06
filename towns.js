$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnAdd').click(() => addTown($("#townName").val()));
	$('#btnShuffle').click(shuffleTowns);
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown(town) {
	$("#towns").append("<option>" + town + "</option>");
    $('#result').text(town + " added succesfully.");
}

function shuffleTowns() {
	let children = $('#towns').children();
	_shuffle(children);
	$('#towns').html();
	for (let i = 0; i < children.length; i++) {
        $('#towns').append(children[i]);
	}
}

function _shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

console.log("Hello from the past");
