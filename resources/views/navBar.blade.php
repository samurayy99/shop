<div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="{{ url('/') }}">
            {{ config('app.name', 'Your Webshop') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">

                <!-- Login Button -->
                <li class="nav-item">
                    <button id="loginButton" class="btn btn-primary" onclick="showLoginModal()">Login</button>
                </li>

                <!-- Admin Section -->
                @if (Auth::check() && Auth::user()->can('Adminpanel Zugriff'))
                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}" class="nav-link">
                        <i class="feather icon-home"></i>
                        <span class="menu-title" data-i18n="Dashboard">{{ __('Dashboard') }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('auth.logout') }}" class="nav-link">
                        <i class="feather icon-log-out"></i>
                        <span class="menu-title" data-i18n="Logout">{{ __('Logout') }}</span>
                    </a>
                </li>
                @endif
                @php
                $dropdownItems = [
                'Verwaltung' => [
                ['route' => 'admin.user.view', 'icon' => 'fal fa-user', 'label' => 'Benutzer'],
                ['route' => 'faq', 'icon' => 'fal fa-question', 'label' => 'FAQs'],
                // ... add more items here
                ],
                'Produkte' => [
                ['route' => 'shop', 'icon' => 'fal fa-arrow-right', 'label' => 'Kategorien'],
                // ... add more items here
                ],
                'System' => [
                ['route' => 'admin.dashboard', 'icon' => 'fal fa-cogs', 'label' => 'Einstellungen'],
                // ... add more items here
                ]
                ];
                @endphp

                <!-- Generate dropdown menus for admin sections -->
                @foreach($dropdownItems as $section => $items)
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="{{ $section }}" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="{{ $items[0]['icon'] }}"></i> {{ $section }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="{{ $section }}">
                        @foreach($items as $item)
                        <a class="dropdown-item" href="{{ route($item['route']) }}">
                            <i class="{{ $item['icon'] }}"></i> {{ $item['label'] }}
                        </a>
                        @endforeach
                    </div>
                </li>
                @endforeach

                <!-- Support Ticket Link -->
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('support.tickets.open') }}">
                        <i class="fal fa-comment-alt-smile"></i> Tickets
                        <span class="badge badge-danger">{{ App\Models\Ticket::countOpenTickets() }}</span>
                    </a>
                </li>

                <!-- Back to Main Site -->
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('base') }}">
                        <i class="fal fa-arrow-alt-from-right"></i> Zurück
                    </a>
                </li>
            </ul>
        </div> <!-- End of Admin Navbar -->
    </div>
</div>