/**
 * Service Worker entry point for Manifest V3.
 * Imports legacy background scripts that still run in the service worker context.
 */

importScripts('/js/api.js', '/js/apps.js', '/js/background.js');
