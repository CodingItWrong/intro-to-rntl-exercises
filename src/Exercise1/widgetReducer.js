const widgets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      if (state.find(widget => widget.id === action.widget.id)) {
        return state;
      } else {
        return [...state, action.widget];
      }
    default:
      return state;
  }
};

export default widgets;
