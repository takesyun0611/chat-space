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
|name|string|unique: true,index: true|
|email|string|unique: true|
### Association
- has_many :comments
- has_many :groups, through :user_groups
- has_many :user_groups

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|unique: true|
### Association
- has_many :users, through :user_groups
- has_many :user_groups
- has_many :comments

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|body|string|
|image|string|
|user|references|null: false, foreigin_key: true|
|group|references|null: false, foreigin_key: true|

### Association
- belongs_to :user
- belongs_to :group

## user_groupテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
