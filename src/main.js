$(document).ready(function() {
  console.log('sanity check');

  // $('#calendar').fullCalendar();
  //  googleCalendarApiKey: 'AIzaSyC8ideWt-GrCpNSt-AYa-ck0SQYDhdIAR8',
  //  eventSources: [{
  //      googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com'
  //   }],
  // $('#calendar').fullCalendar({
  //
  // });


  $($('#calendar').fullCalendar.select).on('click', function () {
    console.log(this);
  })



	$('#calendar').fullCalendar({
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
		select: function(start, end) {
      // console.log(this);
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
  					start: start,
  					end: end
  				};
  				$('#calendar').fullCalendar('renderEvent', eventData, true);
          $('#task-modal').modal('hide')
        }
        console.log($('[data-date="' + dateData + '"]').children())
      })
			$('#calendar').fullCalendar('unselect');
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
	});


  // $('form').on('submit', function (event) {
  //   event.preventDefault()
  //
  //   let taskName = $('#task-name').val()
  //   let taskDescription = $('#task-description').val()
  //   let timeFrame = $('#time-frame').val()
  //   // need to access the priority checkbox
  //
  //   console.log(taskName);
  //   console.log(taskDescription);
  //   console.log(timeFrame);
  //
  //   $($('[data-date="2016-08-09"]')[0]).append(taskName)
  // })
  $.ajax({
    method: "GET",

  })

});
// $(document).ready(function() {
//   console.log($('#calendar'), $('#calendar').fullCalendar);
//     $('#calendar').fullCalendar({
//         googleCalendarApiKey: 'AIzaSyC8ideWt-GrCpNSt-AYa-ck0SQYDhdIAR8',
//         eventSources: [{
//             googleCalendarId: 'isaacjcollier@gmail.com'
//         }]
//     });
// });
