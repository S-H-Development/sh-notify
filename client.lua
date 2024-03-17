function shnotif(icon, title, text, type, length)
    type = type or 'primary'
    length = tonumber(length) or 5000
    SendNUIMessage({
        icon = icon,
        title = title,
        text = text,
        type = type,
        length = length,
    })
    PlaySoundFrontend(-1, '5_SEC_WARNING', 'HUD_MINI_GAME_SOUNDSET', 1)
end

exports('shnotif', shnotif)

-- Example
-- Uncomment this to test all notify functions
-- RegisterCommand('testall', function()
--     exports['sh-notify']:shnotif('fas fa-check-circle', 'Success', 'Test Notification', 'success', '5000')
--     Wait(100)
--     exports['sh-notify']:shnotif('fas fa-info-circle', 'Inform', 'Test Notification', 'primary', '5000')
--     Wait(100)
--     exports['sh-notify']:shnotif('fas fa-exclamation-circle', 'Error', 'Test Notification', 'error', '5000')
-- end)
