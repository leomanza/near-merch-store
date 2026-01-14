CREATE TABLE `provider_configs` (
	`provider` text PRIMARY KEY NOT NULL,
	`enabled` integer DEFAULT false NOT NULL,
	`webhook_url` text,
	`webhook_url_override` text,
	`enabled_events` text,
	`public_key` text,
	`secret_key` text,
	`last_configured_at` integer,
	`expires_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
