var player_name = new Array("NameA", "NameB");
var times_of_player = new Array();
var str_left = "<span style=\"color:rgb(255,104,39);\">";
var str_right = "</span>";

doc_string = document.getElementById("ypbaseball");
var str = doc_string.innerHTML;

for (j = 0; j < player_name.length; j++) {
    var x = 0;
    times_of_player = [];
    var index = str.indexOf(player_name[j]);
    while (index != -1) {
        console.log(index);
        times_of_player[x] = index;
        x = x + 1;
        index = str.indexOf(player_name[j], index + 1);
    }
    console.log(times_of_player);
    for (i = 0; i < times_of_player.length; i++) {
        str = str.slice(0, times_of_player[i] + i * 44) + str_left + str.slice(times_of_player[i] + i * 44, times_of_player[i] + player_name[j].length + i * 44) + str_right + str.slice(times_of_player[i] + player_name[j].length + i * 44);
    }
}
console.log(str);
doc_string.innerHTML = str;
