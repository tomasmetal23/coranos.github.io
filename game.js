const buttonIds = [ 
  {'id':'vl','chance':0.01},
  {'id':'l','chance':0.23},
  {'id':'a','chance':0.48},
  {'id':'h','chance':0.73},
  {'id':'vh','chance':0.98}
];

const onLoad = () => {
  html('win_chance', '-');
  html('roll_under', '-');
  html('payout', '-');
  setOdds();
};

const buttonClick = (elt) => {
  buttonIds.forEach((button) => {
    class_attr(button.id, 'button');
  });
  const id = elt.getAttribute('id');
  if (class_attr(id) == 'button selected_button') {
    class_attr(id, 'button');
  } else {
    class_attr(id, 'button selected_button');
  }
  setOdds();
}

const setOdds = () => {
  buttonIds.forEach((button) => {
    if (class_attr(button.id) == 'button selected_button') {
      html('win_chance', button.chance);
    }
  });
}