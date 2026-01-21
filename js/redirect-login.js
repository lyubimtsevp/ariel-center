// Redirect to React SPA login pages
$(document).ready(function() {
    // Intercept login modal trigger
    $('[data-target="#login"], [href="#login"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = '/login';
    });
    
    // Intercept login-form modal trigger
    $('[data-target="#login-form"], [href="#login-form"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = '/login';
    });
    
    // Intercept registration modal trigger
    $('[data-target="#registration"], [href="#registration"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = '/register';
    });
    
    // Intercept forgot password modal trigger
    $('[data-target="#forgot_password"], [href="#forgot_password"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = '/forgot-password';
    });
    
    // If modal is somehow shown, redirect
    $('#login, #login-form').on('show.bs.modal', function(e) {
        e.preventDefault();
        window.location.href = '/login';
    });
    
    $('#registration, #registration_ur').on('show.bs.modal', function(e) {
        e.preventDefault();
        window.location.href = '/register';
    });
    
    $('#forgot_password').on('show.bs.modal', function(e) {
        e.preventDefault();
        window.location.href = '/forgot-password';
    });
});
