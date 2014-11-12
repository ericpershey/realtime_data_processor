



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>prettyprint.js/prettyprint.js at master · padolsey/prettyprint.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="padolsey/prettyprint.js" name="twitter:title" /><meta content="prettyprint.js - An in-browser JavaScript variable dumper, similar in functionality to ColdFusion&amp;#39;s cfdump tag. " name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/59852?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/59852?v=3&amp;s=400" property="og:image" /><meta content="padolsey/prettyprint.js" property="og:title" /><meta content="https://github.com/padolsey/prettyprint.js" property="og:url" /><meta content="prettyprint.js - An in-browser JavaScript variable dumper, similar in functionality to ColdFusion&#39;s cfdump tag. " property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="492DE7D7:67D3:76332A9:5462C752" name="octolytics-dimension-request_id" /><meta content="9207432" name="octolytics-actor-id" /><meta content="ericpershey" name="octolytics-actor-login" /><meta content="d2f06d1449f644d6927943e5317932fac49895b6dd81c5c0e06de1b088b2d643" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="njTM4Z0KTowMPQxJ5mR8sqA+EqNk8vO4qxSqZqhPHM4+omqd2T7FmMp+LHC68hnL8UfbSgUHJSopVfuYRIV3sQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-406b1166f1875359f0e3160125da624d5c043af14aa6d618ec9c906632b95aaa.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-d8fc894053f5bdd8d2cf84d4e60f0b4101e055a68d8fc3a1e4298d259d2a7dd5.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="e1910e605b392032f6a0111dce05d178">

      
  <meta name="description" content="prettyprint.js - An in-browser JavaScript variable dumper, similar in functionality to ColdFusion&#39;s cfdump tag. ">
  <meta name="go-import" content="github.com/padolsey/prettyprint.js git https://github.com/padolsey/prettyprint.js.git">

  <meta content="59852" name="octolytics-dimension-user_id" /><meta content="padolsey" name="octolytics-dimension-user_login" /><meta content="219584" name="octolytics-dimension-repository_id" /><meta content="padolsey/prettyprint.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="219584" name="octolytics-dimension-repository_network_root_id" /><meta content="padolsey/prettyprint.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/padolsey/prettyprint.js/commits/master.atom" rel="alternate" title="Recent Commits to prettyprint.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/padolsey/prettyprint.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/padolsey/prettyprint.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/ericpershey" data-ga-click="Header, go to profile, text:username">
      <img alt="ericpershey" class="avatar" data-user="9207432" height="20" src="https://avatars3.githubusercontent.com/u/9207432?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">ericpershey</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="padolsey/prettyprint.js">This repository</span>
    </li>
      <li>
        <a href="/padolsey/prettyprint.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="naAkdPUZjPbh58fpWsVv10znKD2agUbvd0Xfi3n5SQinWQAAJvPzlY24hUJhaExUEZFWQybNlPEbY8g5YMiLOg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+mACXcX8Dy2qOVpAfAQY98CssX6HqRYpyEKmYtfCYho0eTis1aNiLozWG0SZEOu1L0fVTBNS7zvKyomS1W85sQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="219584" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/padolsey/prettyprint.js/watchers">
        31
      </a>
      <a href="/padolsey/prettyprint.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/padolsey/prettyprint.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="x8LYbeOSWmyedXrYKMgkvduuIjJ0I6cpB1dTOL+njX5+4/b5qWmGw8PZjKN+PJSmjVQ0wjjPol7C1FGoA6b4Pw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar padolsey/prettyprint.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/padolsey/prettyprint.js/stargazers">
          571
        </a>
</form>
    <form accept-charset="UTF-8" action="/padolsey/prettyprint.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8p5VfuK0CjOkJiE7BlzlqUdaBLv3iLE5ktEhpgcQCMaTWnMS19TMBjcwckkFzUcxBQVItUMpmRJAbNOU32CPHw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star padolsey/prettyprint.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/padolsey/prettyprint.js/stargazers">
          571
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/padolsey/prettyprint.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of padolsey/prettyprint.js to your account" aria-label="Fork your own copy of padolsey/prettyprint.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/padolsey/prettyprint.js/network" class="social-count">84</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/padolsey" class="url fn" itemprop="url" rel="author"><span itemprop="title">padolsey</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/padolsey/prettyprint.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">prettyprint.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/padolsey/prettyprint.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/padolsey/prettyprint.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /padolsey/prettyprint.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/padolsey/prettyprint.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /padolsey/prettyprint.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/padolsey/prettyprint.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /padolsey/prettyprint.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/padolsey/prettyprint.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /padolsey/prettyprint.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/padolsey/prettyprint.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /padolsey/prettyprint.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/padolsey/prettyprint.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /padolsey/prettyprint.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/padolsey/prettyprint.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/padolsey/prettyprint.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:padolsey/prettyprint.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:padolsey/prettyprint.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/padolsey/prettyprint.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/padolsey/prettyprint.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save padolsey/prettyprint.js to your computer and use it in GitHub Desktop." aria-label="Save padolsey/prettyprint.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/padolsey/prettyprint.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of padolsey/prettyprint.js as a zip file"
                   title="Download the contents of padolsey/prettyprint.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/padolsey/prettyprint.js/blob/dea5fb2d6fff20f91fccc3fb75fd3ffb193fc8d6/prettyprint.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f3a4d6df25a5e71c2f13c2c344062afe -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/padolsey/prettyprint.js/blob/master/prettyprint.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/padolsey/prettyprint.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="prettyprint.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/padolsey/prettyprint.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">prettyprint.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">prettyprint.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Kevin Gaudin" class="avatar" data-user="779147" height="24" src="https://avatars1.githubusercontent.com/u/779147?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/KevinGaudin" rel="contributor">KevinGaudin</a></span>
        <time datetime="2012-11-28T07:09:57Z" is="relative-time">Nov 28, 2012</time>
        <div class="commit-title">
            <a href="/padolsey/prettyprint.js/commit/cbd4e096610cb3b9333a35fc7300dda5995c14b2" class="message" data-pjax="true" title="maxArray default value was not checked so always compact arrays if not overridden">maxArray default value was not checked so always compact arrays if no…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>3</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="padolsey" href="/padolsey/prettyprint.js/commits/master/prettyprint.js?author=padolsey"><img alt="James Padolsey" class="avatar" data-user="59852" height="20" src="https://avatars3.githubusercontent.com/u/59852?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="KevinGaudin" href="/padolsey/prettyprint.js/commits/master/prettyprint.js?author=KevinGaudin"><img alt="Kevin Gaudin" class="avatar" data-user="779147" height="20" src="https://avatars3.githubusercontent.com/u/779147?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="litendavid" href="/padolsey/prettyprint.js/commits/master/prettyprint.js?author=litendavid"><img alt="David Waller" class="avatar" data-user="86450" height="20" src="https://avatars1.githubusercontent.com/u/86450?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="James Padolsey" data-user="59852" height="24" src="https://avatars1.githubusercontent.com/u/59852?v=2&amp;s=48" width="24" />
            <a href="/padolsey">padolsey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kevin Gaudin" data-user="779147" height="24" src="https://avatars1.githubusercontent.com/u/779147?v=2&amp;s=48" width="24" />
            <a href="/KevinGaudin">KevinGaudin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Waller" data-user="86450" height="24" src="https://avatars3.githubusercontent.com/u/86450?v=2&amp;s=48" width="24" />
            <a href="/litendavid">litendavid</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>776 lines (659 sloc)</span>
          <span class="meta-divider"></span>
        <span>19.949 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/padolsey/prettyprint.js/raw/master/prettyprint.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/padolsey/prettyprint.js/blame/master/prettyprint.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/padolsey/prettyprint.js/commits/master/prettyprint.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/padolsey/prettyprint.js/edit/master/prettyprint.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/padolsey/prettyprint.js/delete/master/prettyprint.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">/*</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">Copyright (c) 2009 James Padolsey.  All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">Redistribution and use in source and binary forms, with or without</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">modification, are permitted provided that the following conditions</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">are met:</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">   1. Redistributions of source code must retain the above copyright</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c">	  notice, this list of conditions and the following disclaimer.</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">   2. Redistributions in binary form must reproduce the above copyright</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">	  notice, this list of conditions and the following disclaimer in the</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c">	  documentation and/or other materials provided with the distribution.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c">THIS SOFTWARE IS PROVIDED BY James Padolsey ``AS IS&#39;&#39; AND</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-c">ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="pl-c">IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="pl-c">ARE DISCLAIMED. IN NO EVENT SHALL James Padolsey OR CONTRIBUTORS BE LIABLE</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line"><span class="pl-c">FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="pl-c">DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="pl-c">SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="pl-c">CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"><span class="pl-c">LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="pl-c">OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="pl-c">SUCH DAMAGE.</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line"><span class="pl-c">The views and conclusions contained in the software and documentation are</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line"><span class="pl-c">those of the authors and should not be interpreted as representing official</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="pl-c">policies, either expressed or implied, of James Padolsey.</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line"><span class="pl-c"> AUTHOR James Padolsey (http://james.padolsey.com)</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line"><span class="pl-c"> VERSION 1.03.0</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line"><span class="pl-c"> UPDATED 29-10-2011</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line"><span class="pl-c"> CONTRIBUTORS</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line"><span class="pl-c">	David Waller</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line"><span class="pl-c">    Benjamin Drucker</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line"><span class="pl-c"><span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line"><span class="pl-s">var</span> prettyPrint <span class="pl-ko">=</span> (<span class="pl-s">function</span>(){</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">/*</span> These &quot;util&quot; functions are not part of the core</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line"><span class="pl-c">	   functionality but are  all necessary - mostly DOM helpers <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">	<span class="pl-s">var</span> util <span class="pl-ko">=</span> {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">		<span class="pl-enf">el</span>: <span class="pl-s">function</span>(<span class="pl-vpf">type</span>, <span class="pl-vpf">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Create new element <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">			<span class="pl-s">var</span> el <span class="pl-ko">=</span> <span class="pl-sc">document</span>.<span class="pl-sf">createElement</span>(type), attr;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span>Copy to single object <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">			attrs <span class="pl-ko">=</span> util.merge({}, attrs);</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Add attributes to el <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">			<span class="pl-k">if</span> (attrs <span class="pl-ko">&amp;&amp;</span> attrs.style) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">				<span class="pl-s">var</span> styles <span class="pl-ko">=</span> attrs.style;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">				util.applyCSS( el, attrs.style );</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">				<span class="pl-ko">delete</span> attrs.style;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">			<span class="pl-k">for</span> (attr <span class="pl-ko">in</span> attrs) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">				<span class="pl-k">if</span> (attrs.hasOwnProperty(attr)) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">					el[attr] <span class="pl-ko">=</span> attrs[attr];</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">			<span class="pl-k">return</span> el;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">		<span class="pl-enf">applyCSS</span>: <span class="pl-s">function</span>(<span class="pl-vpf">el</span>, <span class="pl-vpf">styles</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Applies CSS to a single element <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> prop <span class="pl-ko">in</span> styles) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">				<span class="pl-k">if</span> (styles.hasOwnProperty(prop)) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">					<span class="pl-k">try</span>{</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">						<span class="pl-c"><span class="pl-pdc">/*</span> Yes, IE6 SUCKS! <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">						el.style[prop] <span class="pl-ko">=</span> styles[prop];</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">					}<span class="pl-k">catch</span>(e){}</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">		<span class="pl-enf">txt</span>: <span class="pl-s">function</span>(<span class="pl-vpf">t</span>) {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Create text node <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-sc">document</span>.<span class="pl-sf">createTextNode</span>(t);</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">		<span class="pl-enf">row</span>: <span class="pl-s">function</span>(<span class="pl-vpf">cells</span>, <span class="pl-vpf">type</span>, <span class="pl-vpf">cellType</span>) {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Creates new &lt;tr&gt; <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">			cellType <span class="pl-ko">=</span> cellType <span class="pl-ko">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>td<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> colSpan is calculated by length of null items in array <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">			<span class="pl-s">var</span> colSpan <span class="pl-ko">=</span> util.count(cells, <span class="pl-c1">null</span>) <span class="pl-ko">+</span> <span class="pl-cn">1</span>,</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">				tr <span class="pl-ko">=</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span>), td,</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">				attrs <span class="pl-ko">=</span> {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">					style<span class="pl-ko">:</span> util.getStyles(cellType, type),</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">					colSpan<span class="pl-ko">:</span> colSpan,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">					<span class="pl-enf">onmouseover</span>: <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">						<span class="pl-s">var</span> tds <span class="pl-ko">=</span> <span class="pl-v">this</span>.parentNode.childNodes;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">						util.forEach(tds, <span class="pl-s">function</span>(<span class="pl-vpf">cell</span>){</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">							<span class="pl-k">if</span> (cell.nodeName.<span class="pl-sf">toLowerCase</span>() <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>td<span class="pl-pds">&#39;</span></span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">							util.applyCSS(cell, util.getStyles(<span class="pl-s1"><span class="pl-pds">&#39;</span>td_hover<span class="pl-pds">&#39;</span></span>, type));</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">					<span class="pl-enf">onmouseout</span>: <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">						<span class="pl-s">var</span> tds <span class="pl-ko">=</span> <span class="pl-v">this</span>.parentNode.childNodes;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">						util.forEach(tds, <span class="pl-s">function</span>(<span class="pl-vpf">cell</span>){</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">							<span class="pl-k">if</span> (cell.nodeName.<span class="pl-sf">toLowerCase</span>() <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>td<span class="pl-pds">&#39;</span></span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">							util.applyCSS(cell, util.getStyles(<span class="pl-s1"><span class="pl-pds">&#39;</span>td<span class="pl-pds">&#39;</span></span>, type));</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">						});</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">			util.forEach(cells, <span class="pl-s">function</span>(<span class="pl-vpf">cell</span>){</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">				<span class="pl-k">if</span> (cell <span class="pl-ko">===</span> <span class="pl-c1">null</span>) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Default cell type is &lt;td&gt; <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">				td <span class="pl-ko">=</span> util.el(cellType, attrs);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">				<span class="pl-k">if</span> (cell.nodeType) {</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">					<span class="pl-c"><span class="pl-pdc">/*</span> IsDomElement <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">					td.<span class="pl-sf">appendChild</span>(cell);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">					<span class="pl-c"><span class="pl-pdc">/*</span> IsString <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">					td.innerHTML <span class="pl-ko">=</span> util.shorten(cell.<span class="pl-sf">toString</span>());</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">				tr.<span class="pl-sf">appendChild</span>(td);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">			<span class="pl-k">return</span> tr;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">		<span class="pl-enf">hRow</span>: <span class="pl-s">function</span>(<span class="pl-vpf">cells</span>, <span class="pl-vpf">type</span>){</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Return new &lt;th&gt; <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">			<span class="pl-k">return</span> util.row(cells, type, <span class="pl-s1"><span class="pl-pds">&#39;</span>th<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">		<span class="pl-enf">table</span>: <span class="pl-s">function</span>(<span class="pl-vpf">headings</span>, <span class="pl-vpf">type</span>){</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">			headings <span class="pl-ko">=</span> headings <span class="pl-ko">||</span> [];</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Creates new table: <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">			<span class="pl-s">var</span> attrs <span class="pl-ko">=</span> {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">					thead<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">						style<span class="pl-ko">:</span>util.getStyles(<span class="pl-s1"><span class="pl-pds">&#39;</span>thead<span class="pl-pds">&#39;</span></span>,type)</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">					tbody<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">						style<span class="pl-ko">:</span>util.getStyles(<span class="pl-s1"><span class="pl-pds">&#39;</span>tbody<span class="pl-pds">&#39;</span></span>,type)</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">					table<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">						style<span class="pl-ko">:</span>util.getStyles(<span class="pl-s1"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>,type)</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">				tbl <span class="pl-ko">=</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span>, attrs.table),</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">				thead <span class="pl-ko">=</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>thead<span class="pl-pds">&#39;</span></span>, attrs.thead),</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">				tbody <span class="pl-ko">=</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>tbody<span class="pl-pds">&#39;</span></span>, attrs.tbody);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">			<span class="pl-k">if</span> (headings.length) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">				tbl.<span class="pl-sf">appendChild</span>(thead);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">				thead.<span class="pl-sf">appendChild</span>( util.hRow(headings, type) );</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">			tbl.<span class="pl-sf">appendChild</span>(tbody);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Facade for dealing with table/tbody</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line"><span class="pl-c">				   Actual table node is this.node: <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">				node<span class="pl-ko">:</span> tbl,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">				tbody<span class="pl-ko">:</span> tbody,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">				thead<span class="pl-ko">:</span> thead,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">				<span class="pl-enf">appendChild</span>: <span class="pl-s">function</span>(<span class="pl-vpf">node</span>) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">					<span class="pl-v">this</span>.tbody.<span class="pl-sf">appendChild</span>(node);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">				<span class="pl-enf">addRow</span>: <span class="pl-s">function</span>(<span class="pl-vpf">cells</span>, <span class="pl-vpf">_type</span>, <span class="pl-vpf">cellType</span>){</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">					<span class="pl-v">this</span>.<span class="pl-sf">appendChild</span>(util.row.<span class="pl-sf">call</span>(util, cells, (_type <span class="pl-ko">||</span> type), cellType));</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">		<span class="pl-enf">shorten</span>: <span class="pl-s">function</span>(<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">			<span class="pl-s">var</span> max <span class="pl-ko">=</span> <span class="pl-cn">40</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">			str <span class="pl-ko">=</span> str.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s\s</span><span class="pl-ko">*</span><span class="pl-ko">|</span><span class="pl-c1">\s\s</span><span class="pl-ko">*</span><span class="pl-k">$</span><span class="pl-ko">|</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">			<span class="pl-k">return</span> str.length <span class="pl-ko">&gt;</span> max <span class="pl-ko">?</span> (str.<span class="pl-sf">substring</span>(<span class="pl-cn">0</span>, max<span class="pl-ko">-</span><span class="pl-cn">1</span>) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span>) <span class="pl-ko">:</span> str;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">		<span class="pl-enf">htmlentities</span>: <span class="pl-s">function</span>(<span class="pl-vpf">str</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">			<span class="pl-k">return</span> str.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">		<span class="pl-enf">merge</span>: <span class="pl-s">function</span>(<span class="pl-vpf">target</span>, <span class="pl-vpf">source</span>) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Merges two (or more) objects,</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line"><span class="pl-c">			   giving the last one precedence <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-ko">typeof</span> target <span class="pl-ko">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">				target <span class="pl-ko">=</span> {};</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> property <span class="pl-ko">in</span> source) {</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">				<span class="pl-k">if</span> ( source.hasOwnProperty(property) ) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">					<span class="pl-s">var</span> sourceProperty <span class="pl-ko">=</span> source[ property ];</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">					<span class="pl-k">if</span> ( <span class="pl-ko">typeof</span> sourceProperty <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">						target[ property ] <span class="pl-ko">=</span> util.merge( target[ property ], sourceProperty );</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">						<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">					target[ property ] <span class="pl-ko">=</span> sourceProperty;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> a <span class="pl-ko">=</span> <span class="pl-cn">2</span>, l <span class="pl-ko">=</span> arguments.length; a <span class="pl-ko">&lt;</span> l; a<span class="pl-ko">++</span>) {</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">				util.merge(target, arguments[a]);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">			<span class="pl-k">return</span> target;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">		<span class="pl-enf">count</span>: <span class="pl-s">function</span>(<span class="pl-vpf">arr</span>, <span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">			<span class="pl-s">var</span> count <span class="pl-ko">=</span> <span class="pl-cn">0</span>;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">			<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-ko">=</span> <span class="pl-cn">0</span>, l <span class="pl-ko">=</span> arr.length; i<span class="pl-ko">&lt;</span> l; i<span class="pl-ko">++</span>) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">				<span class="pl-k">if</span> (arr[i] <span class="pl-ko">===</span> item) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">					count<span class="pl-ko">++</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">			<span class="pl-k">return</span> count;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">		<span class="pl-enf">thead</span>: <span class="pl-s">function</span>(<span class="pl-vpf">tbl</span>) {</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">			<span class="pl-k">return</span> tbl.<span class="pl-sf">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>thead<span class="pl-pds">&#39;</span></span>)[<span class="pl-cn">0</span>];</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">		<span class="pl-enf">forEach</span>: <span class="pl-s">function</span>(<span class="pl-vpf">arr</span>, <span class="pl-vpf">max</span>, <span class="pl-vpf">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-ko">!</span>fn) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">				fn <span class="pl-ko">=</span> max;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Helper: iteration <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">			<span class="pl-s">var</span> len <span class="pl-ko">=</span> arr.length,</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">				index <span class="pl-ko">=</span> <span class="pl-ko">-</span><span class="pl-cn">1</span>;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">			<span class="pl-k">while</span> (<span class="pl-ko">++</span>index <span class="pl-ko">&lt;</span> len) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">				<span class="pl-k">if</span>(fn( arr[index], index, arr ) <span class="pl-ko">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">		<span class="pl-enf">type</span>: <span class="pl-s">function</span>(<span class="pl-vpf">v</span>){</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Returns type, e.g. &quot;string&quot;, &quot;number&quot;, &quot;array&quot; etc.</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line"><span class="pl-c">				   Note, this is only used for precise typing. <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">				<span class="pl-k">if</span> (v <span class="pl-ko">===</span> <span class="pl-c1">null</span>) { <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">				<span class="pl-k">if</span> (v <span class="pl-ko">===</span> <span class="pl-c1">undefined</span>) { <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">				<span class="pl-s">var</span> oType <span class="pl-ko">=</span> <span class="pl-sc">Object</span>.prototype.toString.<span class="pl-sf">call</span>(v).<span class="pl-sf">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span>(<span class="pl-c1">.</span><span class="pl-ko">+?</span>)<span class="pl-cce">\]</span><span class="pl-pds">/</span></span>)[<span class="pl-cn">1</span>].<span class="pl-sf">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">				<span class="pl-k">if</span> (v.nodeType) {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">					<span class="pl-k">if</span> (v.nodeType <span class="pl-ko">===</span> <span class="pl-cn">1</span>) {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">						<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>domelement<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>domnode<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(string<span class="pl-ko">|</span>number<span class="pl-ko">|</span>array<span class="pl-ko">|</span>regexp<span class="pl-ko">|</span>function<span class="pl-ko">|</span>date<span class="pl-ko">|</span>boolean)<span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-sf">test</span>(oType)) {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">					<span class="pl-k">return</span> oType;</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-ko">typeof</span> v <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">					<span class="pl-k">return</span> v.jquery <span class="pl-ko">&amp;&amp;</span> <span class="pl-ko">typeof</span> v.jquery <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-ko">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span> <span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">				<span class="pl-k">if</span> (v <span class="pl-ko">===</span> <span class="pl-sc">window</span> <span class="pl-ko">||</span> v <span class="pl-ko">===</span> <span class="pl-sc">document</span>) {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">			} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">		<span class="pl-enf">within</span>: <span class="pl-s">function</span>(<span class="pl-vpf">ref</span>) {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Check existence of a val within an object</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line"><span class="pl-c">			   RETURNS KEY <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">			<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">				<span class="pl-enf">is</span>: <span class="pl-s">function</span>(<span class="pl-vpf">o</span>) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">					<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-ko">in</span> ref) {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">						<span class="pl-k">if</span> (ref[i] <span class="pl-ko">===</span> o) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">							<span class="pl-k">return</span> i;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">		common<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">			<span class="pl-enf">circRef</span>: <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">key</span>, <span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">				<span class="pl-k">return</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>[POINTS BACK TO &lt;strong&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> (key) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;/strong&gt;]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show this item anyway<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>( prettyPrintThis(obj,{maxDepth<span class="pl-ko">:</span><span class="pl-cn">1</span>}) );</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">			<span class="pl-enf">depthReached</span>: <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">				<span class="pl-k">return</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>[DEPTH REACHED]<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show this item anyway<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">							<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>( prettyPrintThis(obj,{maxDepth<span class="pl-ko">:</span><span class="pl-cn">1</span>}) );</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">						} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">							<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">								util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>ERROR OCCURED DURING OBJECT RETRIEVAL<span class="pl-pds">&#39;</span></span>],<span class="pl-s1"><span class="pl-pds">&#39;</span>error<span class="pl-pds">&#39;</span></span>).addRow([e.message]).node   </td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">							);</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">		<span class="pl-enf">getStyles</span>: <span class="pl-s">function</span>(<span class="pl-vpf">el</span>, <span class="pl-vpf">type</span>) {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">			type <span class="pl-ko">=</span> prettyPrintThis.settings.styles[type] <span class="pl-ko">||</span> {};</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">			<span class="pl-k">return</span> util.merge(</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">				{}, prettyPrintThis.settings.styles[<span class="pl-s1"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>][el], type[el]</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">			);</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">		<span class="pl-enf">expander</span>: <span class="pl-s">function</span>(<span class="pl-vpf">text</span>, <span class="pl-vpf">title</span>, <span class="pl-vpf">clickFn</span>) {</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">			<span class="pl-k">return</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">				innerHTML<span class="pl-ko">:</span>  util.shorten(text) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> &lt;b style=&quot;visibility:hidden;&quot;&gt;[+]&lt;/b&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">				title<span class="pl-ko">:</span> title,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">				<span class="pl-enf">onmouseover</span>: <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">					<span class="pl-v">this</span>.<span class="pl-sf">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span>)[<span class="pl-cn">0</span>].style.visibility <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>visible<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">				<span class="pl-enf">onmouseout</span>: <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">					<span class="pl-v">this</span>.<span class="pl-sf">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>b<span class="pl-pds">&#39;</span></span>)[<span class="pl-cn">0</span>].style.visibility <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">				<span class="pl-enf">onclick</span>: <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">					<span class="pl-v">this</span>.style.display <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">					clickFn.<span class="pl-sf">call</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">				style<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">					cursor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>pointer<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">		<span class="pl-enf">stringify</span>: <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">			<span class="pl-c"><span class="pl-pdc">/*</span> Bit of an ugly duckling!</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line"><span class="pl-c">			   - This fn returns an ATTEMPT at converting an object/array/anyType</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line"><span class="pl-c">				 into a string, kinda like a JSON-deParser</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line"><span class="pl-c">			   - This is used for when |settings.expanded === false| <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">			<span class="pl-s">var</span> type <span class="pl-ko">=</span> util.type(obj),</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">				str, first <span class="pl-ko">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">			<span class="pl-k">if</span> ( type <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>array<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">				str <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">				util.forEach(obj, <span class="pl-s">function</span>(<span class="pl-vpf">item</span>,<span class="pl-vpf">i</span>){</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">					str <span class="pl-ko">+=</span> (i<span class="pl-ko">===</span><span class="pl-cn">0</span><span class="pl-ko">?</span><span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-ko">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-ko">+</span> util.stringify(item);</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">				<span class="pl-k">return</span> str <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-ko">typeof</span> obj <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">				str <span class="pl-ko">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>{<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">				<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-ko">in</span> obj){</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">					<span class="pl-k">if</span> (obj.hasOwnProperty(i)) {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">						str <span class="pl-ko">+=</span> (first<span class="pl-ko">?</span><span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-ko">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-ko">+</span> i <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> util.stringify(obj[i]);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">						first <span class="pl-ko">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">				<span class="pl-k">return</span> str <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">			<span class="pl-k">if</span> (type <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>regexp<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> obj.source <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">			<span class="pl-k">if</span> (type <span class="pl-ko">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">				<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> obj.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>&quot;<span class="pl-pds">&#39;</span></span>) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">			<span class="pl-k">return</span> obj.<span class="pl-sf">toString</span>();</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">		headerGradient<span class="pl-ko">:</span> (<span class="pl-s">function</span>(){</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">			<span class="pl-s">var</span> canvas <span class="pl-ko">=</span> <span class="pl-sc">document</span>.<span class="pl-sf">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">			<span class="pl-k">if</span> (<span class="pl-ko">!</span>canvas.getContext) { <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">			<span class="pl-s">var</span> cx <span class="pl-ko">=</span> canvas.getContext(<span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">			canvas.height <span class="pl-ko">=</span> <span class="pl-cn">30</span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">			canvas.width <span class="pl-ko">=</span> <span class="pl-cn">1</span>;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">			<span class="pl-s">var</span> linearGrad <span class="pl-ko">=</span> cx.createLinearGradient(<span class="pl-cn">0</span>,<span class="pl-cn">0</span>,<span class="pl-cn">0</span>,<span class="pl-cn">30</span>);</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">			linearGrad.addColorStop(<span class="pl-cn">0</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>rgba(0,0,0,0)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">			linearGrad.addColorStop(<span class="pl-cn">1</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>rgba(0,0,0,0.25)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">			cx.fillStyle <span class="pl-ko">=</span> linearGrad;</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">			cx.fillRect(<span class="pl-cn">0</span>,<span class="pl-cn">0</span>,<span class="pl-cn">1</span>,<span class="pl-cn">30</span>);</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">			<span class="pl-s">var</span> dataURL <span class="pl-ko">=</span> canvas.toDataURL <span class="pl-ko">&amp;&amp;</span> canvas.toDataURL();</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">			<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>url(<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> (dataURL <span class="pl-ko">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">		})()</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">//</span> Main..</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">	<span class="pl-s">var</span> <span class="pl-enf">prettyPrintThis</span> <span class="pl-ko">=</span> <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">options</span>) {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">		 <span class="pl-c"><span class="pl-pdc">/*</span></span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line"><span class="pl-c">		 *	  obj :: Object to be printed					</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line"><span class="pl-c">		 *  options :: Options (merged with config)</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line"><span class="pl-c">		 <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">		options <span class="pl-ko">=</span> options <span class="pl-ko">||</span> {};</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">		<span class="pl-s">var</span> settings <span class="pl-ko">=</span> util.merge( {}, prettyPrintThis.config, options ),</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">			container <span class="pl-ko">=</span> util.el(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">			config <span class="pl-ko">=</span> prettyPrintThis.config,</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">			currentDepth <span class="pl-ko">=</span> <span class="pl-cn">0</span>,</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">			stack <span class="pl-ko">=</span> {},</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">			hasRunOnce <span class="pl-ko">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">		<span class="pl-c"><span class="pl-pdc">/*</span> Expose per-call settings.</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line"><span class="pl-c">		   Note: &quot;config&quot; is overwritten (where necessary) by options/&quot;settings&quot;</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line"><span class="pl-c">		   So, if you need to access/change *DEFAULT* settings then go via &quot;.config&quot; <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">		prettyPrintThis.settings <span class="pl-ko">=</span> settings;</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">		<span class="pl-s">var</span> typeDealer <span class="pl-ko">=</span> {</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">			<span class="pl-enf">string</span> : <span class="pl-s">function</span>(<span class="pl-vpf">item</span>){</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt(<span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> util.shorten(item.<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>&quot;<span class="pl-pds">&#39;</span></span>)) <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">			<span class="pl-enf">number</span> : <span class="pl-s">function</span>(<span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt(item);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">			<span class="pl-enf">regexp</span> : <span class="pl-s">function</span>(<span class="pl-vpf">item</span>) {</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">				<span class="pl-s">var</span> miniTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>RegExp<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>regexp<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">				<span class="pl-s">var</span> flags <span class="pl-ko">=</span> util.table();</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">				<span class="pl-s">var</span> span <span class="pl-ko">=</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> item.source <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show more<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(miniTable.node);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">				flags</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span>, item.global])</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>, item.ignoreCase])</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>, item.multiline]);</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">				miniTable</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>source<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> item.source <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>flags<span class="pl-pds">&#39;</span></span>, flags.node])</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>lastIndex<span class="pl-pds">&#39;</span></span>, item.lastIndex]);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> miniTable.node <span class="pl-ko">:</span> span;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">			<span class="pl-enf">domelement</span> : <span class="pl-s">function</span>(<span class="pl-vpf">element</span>, <span class="pl-vpf">depth</span>) {</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">				<span class="pl-s">var</span> miniTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>DOMElement<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>domelement<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">					props <span class="pl-ko">=</span> [<span class="pl-s1"><span class="pl-pds">&#39;</span>id<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>className<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>innerHTML<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>href<span class="pl-pds">&#39;</span></span>], elname <span class="pl-ko">=</span> element.nodeName <span class="pl-ko">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">				miniTable.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>tag<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> elname.<span class="pl-sf">toLowerCase</span>() <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">				util.forEach(props, <span class="pl-s">function</span>(<span class="pl-vpf">prop</span>){</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">					<span class="pl-k">if</span> ( element[prop] ) {</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">						miniTable.addRow([ prop, util.htmlentities(element[prop]) ]);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> miniTable.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>DOMElement (<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> elname.<span class="pl-sf">toLowerCase</span>() <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show more<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(miniTable.node);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">			<span class="pl-enf">domnode</span> : <span class="pl-s">function</span>(<span class="pl-vpf">node</span>){</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Deals with all DOMNodes that aren&#39;t elements (nodeType !== 1) <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">				<span class="pl-s">var</span> miniTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>DOMNode<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>domelement<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">					data <span class="pl-ko">=</span>  util.htmlentities( (node.data <span class="pl-ko">||</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>UNDEFINED<span class="pl-pds">&#39;</span></span>).<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>n<span class="pl-pds">&#39;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">				miniTable</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>nodeType<span class="pl-pds">&#39;</span></span>, node.nodeType <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> (<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> node.nodeName <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>data<span class="pl-pds">&#39;</span></span>, data]);</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> miniTable.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>DOMNode<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show more<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(miniTable.node);</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">			<span class="pl-enf">jquery</span> : <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">depth</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">				<span class="pl-k">return</span> typeDealer[<span class="pl-s1"><span class="pl-pds">&#39;</span>array<span class="pl-pds">&#39;</span></span>](obj, depth, key, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">			<span class="pl-enf">object</span> : <span class="pl-s">function</span>(<span class="pl-vpf">obj</span>, <span class="pl-vpf">depth</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Checking depth + circular refs <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Note, check for circular refs before depth; just makes more sense <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">				<span class="pl-s">var</span> stackKey <span class="pl-ko">=</span> util.within(stack).is(obj);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">				<span class="pl-k">if</span> ( stackKey ) {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">					<span class="pl-k">return</span> util.common.circRef(obj, stackKey, settings);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">				stack[key<span class="pl-ko">||</span><span class="pl-s1"><span class="pl-pds">&#39;</span>TOP<span class="pl-pds">&#39;</span></span>] <span class="pl-ko">=</span> obj;</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">				<span class="pl-k">if</span> (depth <span class="pl-ko">===</span> settings.maxDepth) {</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">					<span class="pl-k">return</span> util.common.depthReached(obj, settings);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">				<span class="pl-s">var</span> table <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>Object<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>],<span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">					isEmpty <span class="pl-ko">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">				<span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-ko">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">					<span class="pl-k">if</span> (<span class="pl-ko">!</span>obj.hasOwnProperty <span class="pl-ko">||</span> obj.hasOwnProperty(i)) {</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">						<span class="pl-s">var</span> item <span class="pl-ko">=</span> obj[i],</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">							type <span class="pl-ko">=</span> util.type(item);</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">						isEmpty <span class="pl-ko">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">							table.addRow([i, typeDealer[ type ](item, depth<span class="pl-ko">+</span><span class="pl-cn">1</span>, i)], type);</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">						} <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">							<span class="pl-c"><span class="pl-pdc">/*</span> Security errors are thrown on certain Window/DOM properties <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">							<span class="pl-k">if</span> (<span class="pl-sc">window</span>.console <span class="pl-ko">&amp;&amp;</span> <span class="pl-sc">window</span>.console<span class="pl-sf">.log</span>) {</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">								console<span class="pl-sf">.log</span>(e.message);</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">				<span class="pl-k">if</span> (isEmpty) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">					table.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;small&gt;[empty]&lt;/small&gt;<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">					table.thead.<span class="pl-sf">appendChild</span>(</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">						util.hRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>key<span class="pl-pds">&#39;</span></span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>colHeader<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">				<span class="pl-s">var</span> ret <span class="pl-ko">=</span> (settings.expanded <span class="pl-ko">||</span> hasRunOnce) <span class="pl-ko">?</span> table.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">					util.stringify(obj),</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show more<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(table.node);</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">				hasRunOnce <span class="pl-ko">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">				<span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">			<span class="pl-enf">array</span> : <span class="pl-s">function</span>(<span class="pl-vpf">arr</span>, <span class="pl-vpf">depth</span>, <span class="pl-vpf">key</span>, <span class="pl-vpf">jquery</span>) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Checking depth + circular refs <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Note, check for circular refs before depth; just makes more sense <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">				<span class="pl-s">var</span> stackKey <span class="pl-ko">=</span> util.within(stack).is(arr);</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">				<span class="pl-k">if</span> ( stackKey ) {</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">					<span class="pl-k">return</span> util.common.circRef(arr, stackKey);</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">				stack[key<span class="pl-ko">||</span><span class="pl-s1"><span class="pl-pds">&#39;</span>TOP<span class="pl-pds">&#39;</span></span>] <span class="pl-ko">=</span> arr;</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">				<span class="pl-k">if</span> (depth <span class="pl-ko">===</span> settings.maxDepth) {</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">					<span class="pl-k">return</span> util.common.depthReached(arr);</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Accepts a table and modifies it <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">				<span class="pl-s">var</span> me <span class="pl-ko">=</span> jquery <span class="pl-ko">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>jQuery<span class="pl-pds">&#39;</span></span> <span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Array<span class="pl-pds">&#39;</span></span>, table <span class="pl-ko">=</span> util.table([me <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> arr.length <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">null</span>], jquery <span class="pl-ko">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>jquery<span class="pl-pds">&#39;</span></span> <span class="pl-ko">:</span> me.<span class="pl-sf">toLowerCase</span>()),</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">					isEmpty <span class="pl-ko">=</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">                    count <span class="pl-ko">=</span> <span class="pl-cn">0</span>;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">				<span class="pl-k">if</span> (jquery){</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">					table.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>selector<span class="pl-pds">&#39;</span></span>,arr.selector]);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">				util.forEach(arr, <span class="pl-s">function</span>(<span class="pl-vpf">item</span>,<span class="pl-vpf">i</span>){</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">                    <span class="pl-k">if</span> (settings.maxArray <span class="pl-ko">&gt;=</span> <span class="pl-cn">0</span> <span class="pl-ko">&amp;&amp;</span> <span class="pl-ko">++</span>count <span class="pl-ko">&gt;</span> settings.maxArray) {</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">                        table.addRow([</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">                            i <span class="pl-ko">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>..<span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> (arr.length<span class="pl-ko">-</span><span class="pl-cn">1</span>),</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">                            typeDealer[ util.type(item) ](<span class="pl-s1"><span class="pl-pds">&#39;</span>...<span class="pl-pds">&#39;</span></span>, depth<span class="pl-ko">+</span><span class="pl-cn">1</span>, i)</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">                        ]);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">                        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">					isEmpty <span class="pl-ko">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">					table.addRow([i, typeDealer[ util.type(item) ](item, depth<span class="pl-ko">+</span><span class="pl-cn">1</span>, i)]);</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">				<span class="pl-k">if</span> (<span class="pl-ko">!</span>jquery){</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">					<span class="pl-k">if</span> (isEmpty) {</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">						table.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;small&gt;[empty]&lt;/small&gt;<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">						table.thead.<span class="pl-sf">appendChild</span>( util.hRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>index<span class="pl-pds">&#39;</span></span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>colHeader<span class="pl-pds">&#39;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> table.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">					util.stringify(arr),</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to show more<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(table.node);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">function</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>(<span class="pl-vpf">fn</span>, <span class="pl-vpf">depth</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> Checking JUST circular refs <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">				<span class="pl-s">var</span> stackKey <span class="pl-ko">=</span> util.within(stack).is(fn);</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">				<span class="pl-k">if</span> ( stackKey ) { <span class="pl-k">return</span> util.common.circRef(fn, stackKey); }</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">				stack[key<span class="pl-ko">||</span><span class="pl-s1"><span class="pl-pds">&#39;</span>TOP<span class="pl-pds">&#39;</span></span>] <span class="pl-ko">=</span> fn;</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">				<span class="pl-s">var</span> miniTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>Function<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">					argsTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>Arguments<span class="pl-pds">&#39;</span></span>]),</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">					args <span class="pl-ko">=</span> fn.<span class="pl-sf">toString</span>().<span class="pl-sf">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\(</span>(<span class="pl-c1">.</span><span class="pl-ko">+?</span>)<span class="pl-cce">\)</span><span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">					body <span class="pl-ko">=</span> fn.<span class="pl-sf">toString</span>().<span class="pl-sf">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\(</span><span class="pl-c1">.</span><span class="pl-ko">*?</span><span class="pl-cce">\)</span><span class="pl-c1">\s</span><span class="pl-ko">+?</span><span class="pl-cce">\{</span><span class="pl-ko">?</span>(<span class="pl-c1">[<span class="pl-c1">\S\s</span>]</span><span class="pl-ko">+</span>)<span class="pl-pds">/</span></span>)[<span class="pl-cn">1</span>].<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\}</span><span class="pl-ko">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">				miniTable</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>arguments<span class="pl-pds">&#39;</span></span>, args <span class="pl-ko">?</span> args[<span class="pl-cn">1</span>].<span class="pl-sf">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-ko">^</span><span class="pl-c1">\w</span>_,<span class="pl-c1">\s</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>) <span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&lt;small&gt;[none/native]&lt;/small&gt;<span class="pl-pds">&#39;</span></span>])</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>body<span class="pl-pds">&#39;</span></span>, body]);</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> miniTable.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>function(){...}<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to see more about this function.<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">					<span class="pl-s">function</span>(){</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(miniTable.node);</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">date</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>(<span class="pl-vpf">date</span>) {</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">				<span class="pl-s">var</span> miniTable <span class="pl-ko">=</span> util.table([<span class="pl-s1"><span class="pl-pds">&#39;</span>Date<span class="pl-pds">&#39;</span></span>,<span class="pl-c1">null</span>], <span class="pl-s1"><span class="pl-pds">&#39;</span>date<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">					sDate <span class="pl-ko">=</span> date.<span class="pl-sf">toString</span>().<span class="pl-sf">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> TODO: Make this work well in IE! <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">				miniTable</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>Time<span class="pl-pds">&#39;</span></span>, sDate[<span class="pl-cn">4</span>]])</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">					.addRow([<span class="pl-s1"><span class="pl-pds">&#39;</span>Date<span class="pl-pds">&#39;</span></span>, sDate.<span class="pl-sf">slice</span>(<span class="pl-cn">0</span>,<span class="pl-cn">4</span>).<span class="pl-sf">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>)]);</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">					</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">				<span class="pl-k">return</span> settings.expanded <span class="pl-ko">?</span> miniTable.node <span class="pl-ko">:</span> util.expander(</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Date (timestamp): <span class="pl-pds">&#39;</span></span> <span class="pl-ko">+</span> (<span class="pl-ko">+</span>date),</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">					<span class="pl-s1"><span class="pl-pds">&#39;</span>Click to see a little more info about this date<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">					<span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">						<span class="pl-v">this</span>.parentNode.<span class="pl-sf">appendChild</span>(miniTable.node);</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">				);</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">				</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">boolean</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>(<span class="pl-vpf">bool</span>) {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt( bool.<span class="pl-sf">toString</span>().<span class="pl-sf">toUpperCase</span>() );</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">undefined</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt(<span class="pl-s1"><span class="pl-pds">&#39;</span>UNDEFINED<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">null</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt(<span class="pl-s1"><span class="pl-pds">&#39;</span>NULL<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-enf">default</span><span class="pl-pds">&#39;</span></span> : <span class="pl-s">function</span>() {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">				<span class="pl-c"><span class="pl-pdc">/*</span> When a type cannot be found <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">				<span class="pl-k">return</span> util.txt(<span class="pl-s1"><span class="pl-pds">&#39;</span>prettyPrint: TypeNotFound Error<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">		container.<span class="pl-sf">appendChild</span>( typeDealer[ (settings.forceObject) <span class="pl-ko">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-ko">:</span> util.type(obj) ](obj, currentDepth) );</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">		<span class="pl-k">return</span> container;</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">/*</span> Configuration <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">	<span class="pl-c"><span class="pl-pdc">/*</span> All items can be overwridden by passing an</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line"><span class="pl-c">	   &quot;options&quot; object when calling prettyPrint <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">	prettyPrintThis.config <span class="pl-ko">=</span> {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">		<span class="pl-c"><span class="pl-pdc">/*</span> Try setting this to false to save space <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">		expanded<span class="pl-ko">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">		forceObject<span class="pl-ko">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">		maxDepth<span class="pl-ko">:</span> <span class="pl-cn">3</span>,</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">		maxArray<span class="pl-ko">:</span> <span class="pl-ko">-</span><span class="pl-cn">1</span>,  <span class="pl-c"><span class="pl-pdc">//</span> default is unlimited</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">		styles<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">			array<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#6DBD2A<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>white<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span><span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#D82525<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">			regexp<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#E2F3FB<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#000<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">			object<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#1F96CF<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">			jquery <span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#FBF315<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">			error<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>red<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>yellow<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">			domelement<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#F3801E<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">			date<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#A725D8<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">			colHeader<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#EEE<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">					textTransform<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>uppercase<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">			<span class="pl-s1"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span><span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">				table<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">					borderCollapse<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>collapse<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">					width<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">				td<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">					padding<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">					fontSize<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>12px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#FFF<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#222<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">					border<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px solid #000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">					verticalAlign<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">					fontFamily<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;Consolas&quot;,&quot;Lucida Console&quot;,Courier,mono<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">					whiteSpace<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>nowrap<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">				td_hover<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">					<span class="pl-c"><span class="pl-pdc">/*</span> Styles defined here will apply to all tr:hover &gt; td,</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line"><span class="pl-c">						- Be aware that &quot;inheritable&quot; properties (e.g. fontWeight) WILL BE INHERITED <span class="pl-pdc">*/</span></span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">				th<span class="pl-ko">:</span> {</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">					padding<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>5px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">					fontSize<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>12px<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">					backgroundColor<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#222<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">					color<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#EEE<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">					textAlign<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">					border<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>1px solid #000<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">					verticalAlign<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">					fontFamily<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;Consolas&quot;,&quot;Lucida Console&quot;,Courier,mono<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">					backgroundImage<span class="pl-ko">:</span> util.headerGradient,</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">					backgroundRepeat<span class="pl-ko">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>repeat-x<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">	<span class="pl-k">return</span> prettyPrintThis;</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">})();</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06079s from github-fe120-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d11dde21d6ca6bcae359b045f5ff7a3524d353cc27e7c18e3386dfeb1222a1c0.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ae4edee81fd41ccff9a52f5e64efb0d35cab8ab071632333bfeb5a2d52a749be.js" type="text/javascript"></script>
      
      
  </body>
</html>

