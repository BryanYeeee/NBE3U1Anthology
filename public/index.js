$(async function () {
    let logo = $('<div>').attr('id', 'logo')
    logo.append($('<span>').text('Bryan Yee - NBE3U1 Anthology'))
    $('#nav').prepend(logo)

    let reflect1 = await fetch('./public/reflections/Reflect1.txt').then(response => response.text())
    $('#content').html(reflect1)
    let reflect3 = await fetch('./public/reflections/Reflect3.txt').then(response => response.text())
    let final = await fetch('./public/reflections/Final.txt').then(response => response.text())
            
    $('<div>').addClass('navbtn').text('Reflection 1').hover(
        function () {
            $(this).text("Being Human");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 1).prependTo($('#nav #btns')).click(() => {
        $('#content').animate({ 'opacity': '0' }, 250, 'linear', function () {
            $('#content').html(reflect1)
            $('#content').animate({ 'opacity': '1' }, 250, 'linear');
        })
    });

    $('<div>').addClass('navbtn').text('Reflection 2').hover(
        function () {
            $(this).text("Having Good Community");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 2).prependTo($('#nav #btns')).click(() => {
        $('#content').animate({ 'opacity': '0' }, 250, 'linear', function () {
            $('#content').html('').append($('<div>').addClass('image')).animate({ 'opacity': '1' }, 250, 'linear');
        })
    })
    $('<div>').addClass('navbtn').text('Reflection 3').hover(
        function () {
            $(this).text("Living Together");
        },
        function () {
            $(this).text('Reflection ' + $(this).data('number'));
        }
    ).data('number', 3).prependTo($('#nav #btns')).click(() => {
        $('#content').animate({ 'opacity': '0' }, 250, 'linear', function () {
            $('#content').html(reflect3)
            $('#content').animate({ 'opacity': '1' }, 250, 'linear');
        })
    });

    $('<div>').addClass('navbtn').text('Final Reflection').hover(
        function () {
            $(this).text("Understanding the Purpose");
        },
        function () {
            $(this).text('Final Reflection');
        }
    ).prependTo($('#nav #btns')).click(() => {
        $('#content').animate({ 'opacity': '0' }, 250, 'linear', function () {
            $('#content').html(final)
            $('#content').animate({ 'opacity': '1' }, 250, 'linear');
        })
    });
});