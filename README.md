# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby 2.5.1
* System dependencies

* Configuration

* Database creation
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|unique: true|
|email|string|unique: true|
### Association
- has_many :comments
- has_many :groups, through :user_group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, foreigin_key: true, unique: true|
### Association
- has_many :users, through :user_group

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|body|string|
|image|string|
### Association
belongs_to :users

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups
- belongs_to :users

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
