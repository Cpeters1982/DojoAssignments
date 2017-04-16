from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):

	context = {
		"atlantic_soccer_conference_teams": League.objects.get(name="Atlantic Soccer Conference").teams.all(),
		"players_boston_pengiuns": Team.objects.get(team_name="Penguins").curr_players.all(),
		"players_international_baseball_conference": Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference"),
		"players_american_footbal_lopez": Player.objects.filter(curr_team__league__name="American Conference of Amateur Football").filter(last_name="Lopez"),
		"football_players": Player.objects.filter(curr_team__league__sport="Football"),
		"teams_with_sophia": Team.objects.filter(curr_players__first_name="Sophia"),
		"leagues_with_sophia": League.objects.filter(teams__curr_players__first_name="Sophia"),
		"flores_not_in_washington_roughriders": Player.objects.filter(last_name="Flores").exclude(curr_team__team_name="Roughriders"),

		"teams_samuel_evans_was_in": Player.objects.get(first_name="Samuel", last_name="Evans").all_teams.all(),

		"players_in_manitoba_tigercats": Player.objects.filter(all_teams__team_name="Tiger-Cats"),
		"players_used_to_be_in_wichita_vikings": Player.objects.filter(all_teams__team_name="Vikings", all_teams__location="Wichita").exclude(curr_team__team_name="Vikings", curr_team__location="Wichita"),
		"team_jacob_gray_played_for_before_colts": Player.objects.get(first_name="Jacob", last_name="Gray").all_teams.all().exclude(location="Oregon"),
		"joshuas_that_were_in_atlantic_federation_baseball": Player.objects.filter(first_name="Joshua").filter(all_teams__league__name="Atlantic Federation of Amateur Baseball Players"),
		"players_sorted_by_number_of_teams": Player.objects.all().annotate(team_count=Count('all_teams')).order_by('-team_count'),
		"teams_that_had_12_players": Team.objects.all().annotate(player_count=Count('all_players')).filter(player_count__gte=12),
	}

	# print context['leagues'][0].sport
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
