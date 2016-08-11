$(document).ready(function() {
  console.log('sanity check');
  // calling the fullCalendar plugIn
	$('#calendar').fullCalendar({
      // API call from googleCalendar to populate the fullCalendar plug-in with dates(holidays)
    googleCalendarApiKey: 'AIzaSyDP1URPeSsp4BEcLUTg5SRMuK4vXDtKTmI',
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
      // console.log(event.title);
      // console.log(event.titleDescription);
      // console.log(event.titleTime);
      // $('#box-holder').append("<h1>" + event.title + "</h1>")
    },
		select: function(start, end) {
      $('#the-form').css('visibility', 'visible')
			$('#task-modal').modal('show');
			var eventData;

      $('#task-modal form').one('submit', function(e) {
        e.preventDefault();
        var title = $('#task-name').val();
        var titleDescription = $('#task-description').val();
        var titleTime = $('#time-frame').val()

        console.log(title);
        console.log(titleDescription);
        console.log(titleTime);
        var dateData = `${start.year()}-${start.month() + 1}-${start.date()}`;
			  if (title) {
  				eventData = {
  					title: title,
            titleDescription: titleDescription,
            titleTime: titleTime,
  					start: start,
  					end: end
  				};
  				$('#calendar').fullCalendar('renderEvent', eventData, true);
          $('#task-modal').modal('hide')
        }
      })
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
	});
});
