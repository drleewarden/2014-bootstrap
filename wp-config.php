<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '2014_boilingdesigns');

/** MySQL database username */
define('DB_USER', 'darryn');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'bq6#tNB|>HH>QwymQC 9Nl/X8R>c9*Y`4rt>)kdEU]DT2j6WyY7CW/F@Fv2{BkZ=');
define('SECURE_AUTH_KEY',  'MYg5Eox=S_@Bp>zC:xkC9*>/T14P@<ek1Z1TkG?gV8z%RV#L*&%k&m >x7N7iu*U');
define('LOGGED_IN_KEY',    'd)[_hIdY]jD<,(wsnM8*8j22 cwvF7L=s$cSP(@Lq2fwX:RV*iK|TB/s#H.*K]b@');
define('NONCE_KEY',        '$,e.-X1612mqXL@(d51L$K8jb|a]?%{<n;cR.Y)d7gF7e=;&nEPDI`{Sp/alwhXr');
define('AUTH_SALT',        '1Lt1>ha,4Z_ZIt`gJ&aaf-]q$bx<Vci#L3OxMA8NUJJTKl58]bGNGppnsB6jH;;c');
define('SECURE_AUTH_SALT', 'lHAHDzU4FOit$#ZB@{:wqTq6L:m17`2kbVM6$S!v~06X4h)&HJZvPhu3*|h<1m%0');
define('LOGGED_IN_SALT',   '!i(c^BG%`;T!ErZen-|y(M)T01{Wsxq]POsH`f>m,+C 4.k4fJ6fA4t5|*cCF~D%');
define('NONCE_SALT',       'x_fK^hrb4WAR^2lVU5}A8#7K2p{{s9n s muMA|O{m]elo)~zc}w~3*SR#sLrZ{T');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
