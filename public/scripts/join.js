var policyBtn = $('.privacy-policy-btn');
		var serviceBtn = $('.service-Btn');
		$('.privacy-policy').css('display', 'none');
		
		$('.join-chk').css('display', 'none');
		policyBtn.click(function() {
			$('.privacy-policy').slideToggle();
			$('.policyChk').slideToggle();
		});
		$('.team-service').css('display', 'none');
		serviceBtn.click(function() {
			$('.team-service').slideToggle();
			$('.serviceChk').slideToggle();
		});
		$('.chkAll').click(function() {
			if ($('.chkAll').prop("checked")) {
				$("input[name='chkAll']").prop('checked', true);
			} else {
				$("input[name='chkAll']").prop('checked', false)
			}
    });
    
    $('.form-recovery.join').hover(
    function() {
      $('.form-panel.two').addClass("form-recovery-join");
    },
    function() {
      $('.form-panel.two').removeClass("form-recovery-join");
    }
  );

$(function() {
  var panelOne = $('.form-panel.two').height(),
    panelTwo = $('.form-panel.two')[0].scrollHeight;

  $('.form-panel.two, .form-recovery.join').not('.form-panel.two.active').on('click', function(e) {
    // e.preventDefault();

    $('.form-toggle').addClass('visible');
    $('.form-panel.one').addClass('hidden');
    $('.form-panel.two').addClass('active');
    $('.form').animate({
      'height': panelTwo
    }, 200);
  });

  $('.form-toggle').on('click', function(e) {
    // e.preventDefault();

    $(this).removeClass('visible');
    $('.form-panel.one').removeClass('hidden');
    $('.form-panel.two').removeClass('active');
    $('.form').animate({
      'height': panelOne
    }, 200);
  });
  });