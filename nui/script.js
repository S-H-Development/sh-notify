window.addEventListener('message', (event) => {
    switch(event.data.action) {
        default:
        shnotif(event.data);
        break;
    }
});

let initialOffset = 250;

function shnotif(data) {
    var $notification = $('.sh-notification.template').clone();
    $notification.removeClass('template');
    $notification.addClass(data.type);

    var $title = $('<div class="sh-notification-title"></div>').html(data.title);
    var $icon = $('<i class="' + data.icon + '"></i>');

    $title.prepend($icon);
    $notification.append($title);

    var $content = $('<div class="sh-notification-content"></div>').html(data.text);
    $notification.append($content);

    $notification.hide();

    var $container = $('.sh-notification-container');
    $container.append($notification);

    var notifications = $container.find('.sh-notification');
    var topPosition = initialOffset;

    if (notifications.length > 1) {
        var lastNotification = $(notifications[notifications.length - 2]);
        topPosition = lastNotification.position().top + lastNotification.outerHeight(true);
    }
    $notification.css('top', topPosition + 'px');

    $notification.fadeIn();
    setTimeout(function() {
        $notification.slideUp(function() {
            $notification.remove();
        });
    }, typeof data.length === 'number' ? data.length : 5000);
}


