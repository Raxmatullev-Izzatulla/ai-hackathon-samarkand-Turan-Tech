@extends('layouts.app')

@section('content')
    @include('components.header')
    @include('components.hero')
    @include('components.about')
    @include('components.customer-reviews')
    @include('components.payments-section')
    @include('components.newsletter')
    @include('components.footer')

    {{-- Boshqa komponentlar bu yerga qo'shiladi --}}
@endsection