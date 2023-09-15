@if (Request::is('admin/*'))

<div class="navbar-container main-menu-content" data-menu="menu-container">
<ul class="nav navbar-nav mr-auto" id="main-menu-navigation" data-menu="menu-navigation">
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('admin.dashboard') }}"><i class="fal fa-home"></i> {{ __('Dashboard') }}</span></a></li>

<!-- Verwaltung -->
<li class="nav-item dropdown" data-menu="dropdown">
<a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self" data-bs-toggle="dropdown">
<i class="fal fa-file"></i>
<span>Verwaltung</span>
</a>
<ul class="dropdown-menu" data-bs-popper="none">

<li class="  ">
<a href="{{ route('admin.users') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-user"></i>
<span>Benutzer</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.faq') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-question"></i>
<span>FAQs</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.orders') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-shopping-cart"></i>
<span>Bestellungen</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.news') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-rss"></i>
<span>Neuigkeiten</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.jabber') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-comment-dots"></i>
<span>Jabber Newsletter</span>
</a>
</li>

</ul>

</li>
<!-- Verwaltung Ende -->

<!-- Produkte -->
<li class="nav-item dropdown" data-menu="dropdown">
<a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self" data-bs-toggle="dropdown">
<i class="fal fa-shopping-basket"></i>
<span>Produkte</span>
</a>
<ul class="dropdown-menu" data-bs-popper="none">

<li class="  ">
<a href="{{ route('admin.categories') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-arrow-right"></i>
<span>Kategorien</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.products') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-arrow-right"></i>
<span>Produkte</span>
</a>
</li>

</ul>

</li>
<!-- Produkte Ende -->

<!-- Support Ticket -->
<li class="nav-item">
<a class="nav-link d-flex align-items-center" href="{{ route('admin.tickets') }}">
<i class="fal fa-comment-alt-smile"></i> {{ __('Tickets') }}</span> 
<span class="badge rounded-pill bg-danger ms-05">{{ App\Models\Ticket::countOpenTickets() }}</span>
</a>
</li>
<!-- Support Ticket Ende -->


<!-- System -->
<li class="nav-item dropdown" data-menu="dropdown">
<a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self" data-bs-toggle="dropdown">
<i class="fal fa-server"></i>
<span>System</span>
</a>
<ul class="dropdown-menu" data-bs-popper="none">

<li class="  ">
<a href="{{ route('admin.settings') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-cogs me-1"></i>
<span>Einstellungen</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.bitcoin') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fab fa-bitcoin me-1"></i>
<span>Bitcoin</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.transactions') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-money-bill-alt me-1"></i>
<span>Transaktionen</span>
</a>
</li>

<li class="  ">
<a href="{{ route('admin.backups') }}" class="dropdown-item  d-flex align-items-center" target="_self">
<i class="fal fa-file-search me-1"></i>
<span>Backups</span>
</a>
</li>

</ul>

</li>
<!-- System Ende -->


<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('site.home') }}"><i class="fal fa-arrow-alt-from-right"></i> {{ __('Zurück') }}</span></a></li>
</ul>
</div>

@else

<div class="navbar-container main-menu-content" data-menu="menu-container">
<ul class="nav navbar-nav mr-auto" id="main-menu-navigation" data-menu="menu-navigation">
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="/"><i class="fal fa-home"></i> {{ __('Neuigkeiten') }}</span></a></li>
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('shop.entry') }}"><i class="fal fa-shopping-cart"></i> {{ __('Produkte') }}</span></a></li>


@if(Auth::check())
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('user.cashin') }}"><i class="fal fa-wallet"></i> {{ __('Guthaben') }}: {{ Auth::user()->getBalance() }}€</span></a></li>
@endif

<li class="nav-item">
<a class="nav-link d-flex align-items-center" href="{{ route('support.tickets.answered') }}"><i class="fal fa-question"></i> {{ __('Hilfe') }} 
@if(Auth::check() && App\Models\Ticket::countAnsweredTicketsByUser(Auth::user()->id) > 0)
<span class="badge rounded-pill bg-primary ms-05">{{ App\Models\Ticket::countAnsweredTicketsByUser(Auth::user()->id) }}</span>
@endif
</span>
</a></li>

@if(App\Models\Faq::hasFaq()) 
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('faq') }}"><i class="fal fa-book"></i> {{ __('FAQ') }}</span></a></li>
@endif

@can('Adminpanel Zugriff')
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('admin.dashboard') }}"><i class="fal fa-arrow-alt-from-left"></i> {{ __('Admin Panel') }}</span></a></li>
@endcan
@if(!Auth::check()) 
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('auth.login') }}"><i class="fal fa-sign-in-alt"></i> {{ __('Anmelden') }}</span></a></li>
@endif
</ul>
</div>

@endif