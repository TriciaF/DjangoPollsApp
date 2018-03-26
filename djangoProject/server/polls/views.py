from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from .serializers import QuestionSerializer, ChoiceSerializer
from django.http import JsonResponse
from django.core import serializers
from rest_framework.views import APIView
from .models import Choice, Question

class IndexView(APIView):
  def get(self, request, format=None):
    questions = Question.objects.all()
    questions_serialized = serializers.serialize('json', questions)
    return JsonResponse(questions_serialized, safe=False)


# class IndexView(generic.ListView):
    # template_name = 'polls/index.html'
    # context_object_name = 'latest_question_list'

    # def get_queryset():
    #   questions = Question.objects.all()
    #   questions_serialized = serializers.serialize('json', questions)
    #   return JsonResponse(questions_serialized, safe=False)
          

class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'
    serializer_class = QuestionSerializer


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'
    serializer_class = ChoiceSerializer

def vote(request, question_id):
  question = get_object_or_404(Question, pk=question_id)
  try:
    selected_choice = question.choice_set.get(pk=request.POST['choice'])
  except (KeyError, Choice.DoesNotExist):
    #Redisplay the question voting forml
    return render(request, 'polls/detail.html', {
      'question': question,
      'error_message': "You didn't select a choice."
    })
  else:
    selected_choice.votes += 1
    selected_choice.save()
    # Always return an HttpResponseRedirect after successfully dealing
    # with POST data. This prevents data from being posted twice if a
    # user hits the Back button.
    return HttpResponseRedirect(reverse('polls:results', args=(question.id, )))
