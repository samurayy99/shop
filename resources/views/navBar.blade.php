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
                <!-- Admin Section -->
                @if (Auth::check())
                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}" class="nav-link">
                        <i class="feather icon-home"></i>
                        <span class="menu-title" data-i18n="Dashboard">{{ __('Dashboard') }}</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{ route('logout') }}" class="nav-link">
                        <i class="feather icon-log-out"></i>
                        <span class="menu-title" data-i18n="Logout">{{ __('Logout') }}</span>
                    </a>
                </li>
                @else
                <li class="nav-item">
                    <a href="{{ route('login') }}" class="nav-link">
                        <i class="feather icon-log-in"></i>
                        <span class="menu-title" data-i18n="Login">{{ __('Login') }}</span>
                    </a>
                </li>
                @endif
                @php
                $dropdownItems = [
                'Verwaltung' => [
                ['route' => 'admin.users', 'icon' => 'fal fa-user', 'label' => 'Benutzer'],
                ['route' => 'admin.faq', 'icon' => 'fal fa-question', 'label' => 'FAQs'],
                // ... add more items here
                ],
                'Produkte' => [
                ['route' => 'admin.categories', 'icon' => 'fal fa-arrow-right', 'label' => 'Kategorien'],
                // ... add more items here
                ],
                'System' => [
                ['route' => 'admin.settings', 'icon' => 'fal fa-cogs', 'label' => 'Einstellungen'],
                // ... add more items here
                ]
                ];
                @endphp

                <!-- Generate dropdown menus for admin sections -->
                @foreach($dropdownItems as $section => $items)
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="{{ $section }}" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <a class="nav-link" href="{{ route('admin.tickets') }}">
                        <i class="fal fa-comment-alt-smile"></i> Tickets
                        <span class="badge badge-danger">{{ App\Models\Ticket::countOpenTickets() }}</span>
                    </a>
                </li>

                <!-- System Dropdown -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSystem" role="button"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fal fa-server"></i> System
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownSystem">
                        <a class="dropdown-item" href="{{ route('admin.settings') }}">
                            <i class="fal fa-cogs"></i> Einstellungen
                        </a>
                        <a class="dropdown-item" href="{{ route('admin.bitcoin') }}">
                            <i class="fab fa-bitcoin"></i> Bitcoin
                        </a>
                        <a class="dropdown-item" href="{{ route('admin.transactions') }}">
                            <i class="fal fa-money-bill-alt"></i> Transaktionen
                        </a>
                        <a class="dropdown-item" href="{{ route('admin.backups') }}">
                            <i class="fal fa-file-search"></i> Backups
                        </a>
                    </div>
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