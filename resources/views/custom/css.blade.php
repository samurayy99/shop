/* HIGHSOCIETY */
:root {
    --bs-primary: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.text-primary {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.btn-primary,
.btn-primary[disabled],
.btn-primary:active,
.btn-primary:focus {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.btn-primary:hover {
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.brand-text {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.price-tag-sale {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.form-control:active,
.form-control:focus {
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.form-select:active,
.form-select:focus {
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

primary-color {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

a.primary-color {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.input-group-text:active,
.input-group-text:focus {
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.dark-layout .spinner-border {
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
    border-right-color: transparent !important; 
}

.progress-bar {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.link-primary {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important; 
}

.auth-wrapper.auth-basic .auth-inner:before {
    background-image: url({{ App\Models\Settings::get('css.background_url') }} !important; ); 
}

.auth-wrapper.auth-basic .auth-inner:after {
    background-image: url({{ App\Models\Settings::get('css.background_url') }} !important; ); 
}

.dark-layout .pagination:not([class*='pagination-']) .page-item.active .page-link {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important; 
}

.dark-layout .pagination:not([class*='pagination-']) .page-item .page-link:hover {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;  
}

.dark-layout .dataTables_wrapper .dt-buttons .dt-button-collection [class*='buttons-']:active {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;  
}

.form-check-input:checked {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;  
    border-color: {{ App\Models\Settings::get('css.primary_color') }} !important;  
}

.dropdown-item:hover, .dropdown-item:focus {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.dropdown-item.active, .dropdown-item:active {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.bg-primary {
    background-color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}

.p primary-color {
    color: {{ App\Models\Settings::get('css.primary_color') }} !important;
}




