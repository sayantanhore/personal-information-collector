from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from dreamjob.settings import BASE_DIR
import os, json, csv
from collections import defaultdict
path = os.path.join(BASE_DIR, 'files')

def home(request):
  return render(request, 'index.html', {})

def get_book_genres(request, min_freq = 10):
  genres = []
  reader = csv.reader(open(path + '/word_VBG_all.txt','r'), delimiter='\t')
  for row in reader:
    if int(row[1]) > min_freq:
      genres.append(row[0])
  return JsonResponse({'genres': genres})

def get_genres(request):
  genres = defaultdict(list);
  reader = csv.reader(open(path + '/book_genres_selected.txt','r'));

  ready_dict = defaultdict(list);
  ready_dict['Business'] = ['Exchange','Branding','Investment','Leadership','Marketing',\
  'Management','MLM','Motivation','Negotiations','Sales','Advertisement','Secrets of success',\
  'Time management','HR','Finance','Online sales']

  ready_dict['Self-improvement'] = ['Intelligence','Intuition','The art of communication','Coaching','Meditation',\
  'Fast reading','Creative thinking','Memory training','Filosophy','Humour']

  ready_dict['Spiritual practices'] = ['Martial arts','Sport','Chess','Checkers',\
  'Yoga','Prayer','The road to home','Happiness']

  ready_dict['Psychology'] = ['Zoopsychology', 'Conflictology', 'Medical psychology', 'General psychology', 'Pathopsychology', 'Pedagogy', \
  'Practical psychology', 'Psychiatry', 'Psychodiagnostics', 'Psychology and management', 'Psychopathology', 'Psychophysiology', 'Story healing',\
  'Social psychology', 'Fear', 'Stress', 'Transpersonal psychology', 'Character and traits', 'Schizophrenia', 'Emotions', 'Law psychology', \
  'Art-therapy', 'Geshtalt-therapy', 'Hypnose', 'NLP', 'The basics of psychotherapy',\
  'Psychoanalys', 'Psychodrama', 'Body psychology', 'Family therapy', 'Symbol drama', 'Transactional analysis']

  ready_dict['Health'] = ['Homoeopathy','Diets Breathing', 'Health Vision', 'Back treatment', 'Massage', 'Stopping bad habits',\
  'Food nutrition', 'Raw Food', 'Plants and herbs']

  ready_dict['Relationships'] = ['Parenting','Family','Love', 'Mother and child', 'Sex']


  for row in reader:
      if row[0] in ready_dict.keys():
          genres[row[0]] = ready_dict[row[0]]
      else:
          genres[row[0]] = [];

  #print genres;
  #return json.dumps(genres)
  return JsonResponse({'genres': genres})

def get_spheres_dictionary(request):
    #f = open('high_level_jobs.txt','r')
    #rows = f.readlines()
    #top_spheres = [w.rstrip() for w in rows]

    f = open(path + '/Classification_edited.txt','r')
    reader = csv.reader(f,delimiter=':')

    spheres = defaultdict(list)
    for row in reader:
        sphere = row[0].split(" ")[1]
        #print sphere;
        sub_spheres = row[1].replace('\\','').split(',');
        #print sphere + '----' + ' '.join(sub_spheres);
        spheres[sphere] = sub_spheres
    #return json.dumps(d)
    return JsonResponse({'spheres': spheres})
