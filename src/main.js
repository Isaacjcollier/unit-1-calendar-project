$(document).ready(function() {
  console.log('sanity check');

  // calling the fullCalendar plugIn
	$('#calendar').fullCalendar({
      // API call from googleCalendar to populate the fullCalendar plug-in with dates(holidays)
    googleCalendarApiKey: 'AIzaSyC94yUe5dp7zkT9PtlQMUHgIli3DuQaack',
    eventSources: [{
        googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com'
    }],
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		selectable: true,
		selectHelper: true,

    eventClick : function (event, jsEvent, view) {
      // empty the modal so no Duplication
      $('.task-name').empty()
      $('.task-description').empty()
      $('.task-timeFrame').empty()
      $('.task-difficulty').empty()
      // Display Modal
      $('#task-info').modal('show');
      // Append all the information from the task into the modal frame
      $('.task-name').append('<h6 style="color:black">' + event.title + '</h6>')
      $('.task-description').append('<h6 style="color:black">' + event.titleDescription + '</h6>')
      $('.task-timeFrame').append('<h6 style="color:black">' + event.titleTime + '</h6>')
      $('.task-difficulty').append('<h6 style="color:black">' + event.titleDifficulty + '</h6>')
    },
    // when selecting an empty date, prompts the modal form
		select: function(start, end) {
			$('#task-modal').modal('show');
			var eventData;
      //  when submiting the form, It will only create the event on that one day
      $('#task-modal form').one('submit', function(e) {
        e.preventDefault();
        // establish variables for each form input
        var title = $('#task-name').val();
        var titleDescription = $('#task-description').val();
        var titleTime = $('#time-frame').val()
        var titleDifficulty = $('#task-difficulty').val()

        // once the event form has a title (establish this object)
			  if (title) {
  				eventData = {
  					title: title,
            titleDescription: titleDescription,
            titleTime: titleTime,
            titleDifficulty: titleDifficulty,
  					start: start,
  					end: end
  				};
  				$('#calendar').fullCalendar('renderEvent', eventData, true);
          // return the modal to be hidden
          $('#task-modal').modal('hide')
        }
      })
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
	});
});
