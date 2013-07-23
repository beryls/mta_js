n_line = ['Times Square',
          '34th',
          '28th and Broadway',
          '23rd and Broadway',
          'Union Square',
          '8th St'];
l_line = ['8th Ave',
          '6th',
          'Union Square',
          '3rd',
          '1st'];
six_line = ['Grand Central',
          '33rd',
          '28th and Park',
          '23rd and Park',
          'Union Square',
          'Astor Place'];

var mta = {
  n: n_line,
  l: l_line,
  six: six_line
};

var first_stop = '34th';
var last_stop = 'Grand Central';
var on_line = 'n';
var off_line = 'six';

if (on_line == off_line) {
  var index_one = mta[on_line].indexOf(first_stop);
  var index_two = mta[off_line].indexOf(last_stop);
  var diff = Math.abs(index_one - index_two);
} else {
  var start_index = mta[on_line].indexOf(first_stop);
  var union_first_index = mta[on_line].indexOf("Union Square");
  var first_leg = Math.abs(start_index - union_first_index);

  var union_second_index = mta[off_line].indexOf("Union Square");
  var final_index = mta[off_line].indexOf(last_stop);
  var second_leg = Math.abs(union_second_index - final_index);

  var diff = (first_leg + second_leg);
}

console.log(diff);