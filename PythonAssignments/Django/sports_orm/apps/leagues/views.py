from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):

	context = {
		"baseball_leagues": League.objects.filter(sport="Baseball"),
		"womens_leagues": League.objects.filter(name__contains="Women"),
		"hockey_leagues": League.objects.filter(sport__contains="Hockey"),
		"non_football_leagues": League.objects.exclude(sport__contains="Football"),
		"conference_leagues": League.objects.filter(name__contains="Conference"),
		"atlantic_leagues": League.objects.filter(name__contains="Atlantic"),
		"dallas_teams": Team.objects.filter(location="Dallas"),
		"raptors_teams": Team.objects.filter(team_name="Raptors"),
		"city_location_teams": Team.objects.filter(location__contains="City"),
		"t_teams": Team.objects.filter(team_name__startswith="T"),
		"teams_alphabetical_by_location": Team.objects.all().order_by('location'),
		"teams__reverse_alphabetical_by_name": Team.objects.all().order_by('-team_name'),
		"last_name_cooper_players": Player.objects.filter(last_name="Cooper"),
		"first_name_joshua_players": Player.objects.filter(first_name="Joshua"),
		"last_name_cooper_not_joshua_players": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alexander_or_wyatt_players": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt"),
	}

	# print context['leagues'][0].sport
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
